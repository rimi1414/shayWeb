<template>
  <div>
    <br><br>
    <span v-if="!editedProfile.id" class="title">       בחירת העדפות </span>
    <span v-if="editedProfile.id" class="title">       עדכון העדפות </span>
    <div style="margin-top: 10px">
      <p class="ttitlemax"> פרטים שיופיעו לכולם: </p>
    </div>


    <p class="inputtitle">שם מלא: </p>
    <q-input class="input" ref="name" filled v-model="localEditedProfile.name" color="red" label="full name *"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type something']"/>
    <p class="inputtitle">תאריך לידה: </p>
    <q-input class="input" v-model="localEditedProfile.date" filled type="date" color="red" label="date" hint=" date"
             lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
    <p class="inputtitle">צבע עיניים: </p>
    <q-input class="input" v-model="localEditedProfile.color" color="red" type="color" label="color *"/>

    <br>
    <br>
    <br>
    <input type="color" v-model="localEditedProfile.color" id="primary-color-input"/>

    <br>

    <p class="inputtitle">סגנון גוף: </p>
    <q-badge v-model="editedBody" id="onbody" class="111" color="black">
      {{ editedBody }}

    </q-badge>
    <div @click="numberBody()">
      <q-slider class="input" reverse v-model="localEditedProfile.body" :min="0"
                :max="50" color="black"
                label-always/>
    </div>
    <p class="inputtitle1">חטוב/ה </p>
    <p class="inputtitle2">מלא/ה </p>
    <br>
    <!--    <p class="inputtitle">סגנון גוף: </p>-->
    <!--    <q-slider class="input" reverse v-model="editedProfile.tbody" label="boby *" :min="0" :max="50" color="black"-->
    <!--              label-always />-->
    <!--    <p class="inputtitle1">רזה </p>-->
    <!--    <p class="inputtitle2">שמן </p>-->
    <p class="inputtitle">גובה: </p>
    <q-input class="input" v-model="localEditedProfile.height" color="red" type="number" :min="150" :max="230"
             label="height *" hint="150-230"/>
    <p class="inputtitle">דת: </p>
    <q-select class="input" clearable filled color="red" v-model="localEditedProfile.religion" :options="options"
              label="religion"/>
    <p class="inputtitle">תמונת פרופיל: </p>

    <q-input class="input" v-model="localEditedProfile.image" @click="click1" @change="previewImage1" ref="input1"
             filled type="file" label="profile pic"/>

    <p class="inputtitle">עוד תמונות: </p>

    <q-input class="input" v-model="localEditedProfile.pic" @click="click1" @change="previewImage" ref="input1" filled
             type="file" label="profile pic"/>

    <p class="inputtitle">קצת על עצמי: </p>
    <q-input class="input" v-model="localEditedProfile.onme" filled clearable type="textarea" label="קצת על עצמי *"/>
    <q-btn v-if="!profile" size="15px"
           style="background: darkred; margin-top: 20px; margin-right: 50%; color: white"
           label="המשך לפרופיל" @click="insert()"/>

    <q-btn v-if="profile" size="15px"
           style="background: darkred; margin-top: 20px; margin-right: 40%; color: white"
           label="עדכן פרופיל" @click="update()"/>
    <br>
    <br>
    <br>

  </div>

</template>

<script>
const inputs = ['primary', 'secondary'];
import localStorageDriver from '../Driver/Local-Storage'
// import api from "@/Driver/api";
import firebaseDatabase from '../Driver/firebase/database';
import firebaseInstance from '../Driver/firebase';
import storege from '../Driver/firebase/storege'
import {mapMutations, mapState, mapActions,} from 'vuex';

export default {
  name: "AddProfile",
  props: ['tableName'],
  computed: mapState('profiles', ['editedProfile', "profile"]),

  data() {
    return {
      editedBody: '(0- רזה | 50- שמן)',
      temp: null,
      localEditedProfile: {
        name: '',
        body: 2,
        // bodyt:'',
        height: 150,
        pic: null,
        image: null
      },
      model: null,
      options: [
        'דתי', 'אטאיסט', 'מסורתי', 'חילוני',
      ]
    }

  },
  methods: {
    ...mapActions('profiles', ['insertProfile', 'updateProfile']),
    ...mapMutations('profiles', ['setEditedProfile', 'setEditedProfileId']),

    click1() {
      this.$refs.input1.click()
    },
    previewImage(event) {
      this.uploadValue=0;
      this.img1=null;
      this.imageData = event.target.files[0];
      this.onUpload()

    },
    previewImage1(event) {
      this.uploadValue=0;
      this.img2=null;
      this.imageData = event.target.files[0];
      this.onUpload1()

    },


    onUpload(){

      this.img1=null;
      const storageRef=firebaseInstance.firebase.storage()
          .ref(`${window.user.uid}`);
      var mountainImagesRef = storageRef.child('profile/mountains.jpg');
      return  mountainImagesRef.put(this.imageData)
          .then((snapshot) => {
            console.log('Uploaded a blob or file!') ;
            return   snapshot.ref.getDownloadURL().then((result)=> {
              console.log(result)
              this.img1 =result;
              this.localEditedProfile.pic = this.img1
            });
          });


    },


    onUpload1(){

      this.img2=null;
      const storageRef=firebaseInstance.firebase.storage()
          .ref(`${window.user.uid}`);
      var mountainImagesRef = storageRef.child('images/mountains.jpg');
      return  mountainImagesRef.put(this.imageData)
          .then((snapshot) => {
            console.log('Uploaded a blob or file!') ;
            return   snapshot.ref.getDownloadURL().then((result)=> {
              console.log(result)
              this.img2 =result;
              this.localEditedProfile.image = this.img2
            });
          });


    },

    localSetEditedProfile() {
      this.setEditedProfile(this.localEditedProfile)
    },
    goToHome() {
      this.$emit('addProfile')
      this.goToPrifiles();
    },
    insert() {
      this.localEditedProfile.body = localStorageDriver.bodyCalculator(this.localEditedProfile.body)
      this.localEditedProfile.date = localStorageDriver.ageCalculator(this.localEditedProfile.date)
      this.localSetEditedProfile();
      this.insertProfile()
      this.$router.push('/profiles');
    },
    update() {
      this.localSetEditedProfile();
      this.updateProfile();
      this.goToHome()
    },
    goToPrifiles() {
      this.$router.push(`/profiles`)
    },
    goToPrifile() {
      this.$router.push(`/profile`)
    },
    numberBody() {
      if (this.localEditedProfile.body <= 20) this.editedBody = 'חטוב/ה'
      else this.editedBody = 'מלא/ה'
    }

  },
  created() {
    this.setEditedProfileId(this.$route.params.profileId);
this.setEditProfileById()
.then(() =>{
  Object.assign(this.localEditedProfile, this.editedProfile)

    })
    if (!window.user) {
      this.$router.push('/first')
    }
  },

}

//     click1() {
//       this.$refs.input1.click()
//     },
//     previewImage(event) {
//       this.uploadValue=0;
//       this.img1=null;
//       this.imageData = event.target.files[0];
//       this.onUpload()
//
//     },
//     previewImage1(event) {
//       this.uploadValue=0;
//       this.img2=null;
//       this.imageData = event.target.files[0];
//       this.onUpload1()
//
//     },
//
//
//     onUpload(){
//
//     this.img1=null;
//     const storageRef=firebaseInstance.firebase.storage()
//         .ref(`${window.user.uid}`);
//     var mountainImagesRef = storageRef.child('profile/mountains.jpg');
//     return  mountainImagesRef.put(this.imageData)
//         .then((snapshot) => {
//             console.log('Uploaded a blob or file!') ;
//             return   snapshot.ref.getDownloadURL().then((result)=> {
//                 console.log(result)
//               this.img1 =result;
//                 this.editedProfile.pic = this.img1
//             });
//         });
//
//
// },
//
//
//     onUpload1(){
//
//       this.img2=null;
//       const storageRef=firebaseInstance.firebase.storage()
//           .ref(`${window.user.uid}`);
//       var mountainImagesRef = storageRef.child('images/mountains.jpg');
//       return  mountainImagesRef.put(this.imageData)
//           .then((snapshot) => {
//             console.log('Uploaded a blob or file!') ;
//             return   snapshot.ref.getDownloadURL().then((result)=> {
//               console.log(result)
//               this.img2 =result;
//               this.editedProfile.image = this.img2
//             });
//           });


// insert() {
//   this.editedProfile.body = localStorageDriver.bodyCalculator(this.editedProfile.body)
//   this.editedProfile.date = localStorageDriver.ageCalculator(this.editedProfile.date)
//   if (this.editedProfile.date == false) return false;
//    // this.x = {profiles: this.editedProfile}
//   //   firebaseDatabase.image({ pic: this.editedProfile.pic})
//   // .then((res) =>{
//     this.editedProfile.pic = this.img1
//     this.editedProfile.image = this.img2
//     firebaseDatabase.post({entity: this.tableName, profile: this.editedProfile})
//     this.$emit('addProfile')
//     this.goToPrifiles()
// })
// },


// },

// },


</script>

<style scoped>


.btm1 {
  font-size: 100px;

  margin-right: 30px;
  margin-top: 30px;
}

.body {

  position: static;
  margin-left: 3000px;

}

.ttitlemax {
  margin-right: 15%;
  padding: 5px 30px 5px 30px;
  opacity: 0.8;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: #A52A2A;
  color: white;
  margin-top: 10px;
  display: inline-block;
  cursor: copy;
}

.inputtitle {
  margin-right: 35%;
  padding: 0px 30px 0px 30px;
  opacity: 0.8;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: red;
  margin-top: 10px;
  display: inline-block;
  cursor: copy;
}

.inputtitle1 {

  margin-right: 35%;
  padding: 0px 20px 0px 20px;
  opacity: 0.6;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: red;
  color: black;
  margin-top: -2.3%;
  display: inline-block;
  cursor: copy;
  position: absolute;
}

.inputtitle2 {

  margin-right: 64%;
  padding: 0px 20px 0px 20px;
  opacity: 0.6;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: red;
  color: black;
  margin-top: -2.3%;
  display: inline-block;
  cursor: copy;
  position: absolute;
}

.input {
  margin-left: 40%;
  max-width: 300px;


}

.title {
  margin-right: 25%;
  padding: 0px 150px 0px 150px;
  opacity: 0.85;
  font-size: 50px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: #A52A2A;
  color: white;
  margin-top: 10px;

  display: inline-block;


}
</style>