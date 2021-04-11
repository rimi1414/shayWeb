<template  >
  <q-page class="picAdd">
  <div class="constrain">
    <br><br>
    <q-card class="a-title glossy">
    <span  v-if="!profile" >       בחירת העדפות </span>
    <span v-else >       עדכון העדפות </span>
    </q-card>


    <q-card  class=" b-title" style="height: 100%" v-if="dialog === 1 && !profile">
      <p>שלום רימון, זה הזמן ליצור לעצמך את הפרופיל האישי על מנת שתוכל למצא את בחירת ליבך</p>

    <q-btn class="text-weight-bold shadow-10" @click="dialog ++">לחץ להתחיל</q-btn>

    </q-card>

    <q-card class="c-title" v-if="dialog === 2">
      <p class="inputTitle text-weight-bold ">שם מלא: </p>
      <q-input class="inputAdd" dark filled ref="name"  v-model="localEditedProfile.name" color="red" label="full name *"
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type something']"/>
      <p class="inputTitle text-weight-bold">תאריך לידה: </p>
      <q-input class="inputAdd" dark   filled v-model="localEditedProfile.date"  type="date" color="red" label="date" hint=" date"
               lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
      <p class="inputTitle text-weight-bold">צבע עיניים: </p>
      <q-input class="inputAdd" v-model="localEditedProfile.color" color="red" type="color" label="color *"/>

      <q-btn size="20px" class="a-btn text-weight-bold glossy"  @click="dialog ++">המשך</q-btn>
    </q-card>



    <q-card class="c-title" v-if="dialog === 3">
      <p class="inputTitle">סגנון גוף: </p>
      <q-badge  v-model="editedBody" id="onbody" class="111" color="black">
        {{ editedBody }}
      </q-badge>
      <div @click="numberBody()">
        <q-slider class="inputAdd" dark reverse v-model="localEditedProfile.body" :min="0"
                  :max="50" color="black"
                  label-always/>
      </div>
      <p class="inputtitle1">חטוב/ה </p>
      <p class="inputtitle2">מלא/ה </p>
      <br>
      <!--              <p class="inputtitle">סגנון גוף: </p>-->
      <!--              <q-slider class="input" reverse v-model="editedProfile.tbody" label="boby *" :min="0" :max="50" color="black"-->
      <!--                        label-always />-->
      <!--              <p class="inputtitle1">רזה </p>-->
      <!--              <p class="inputtitle2">שמן </p>-->
      <p class="inputTitle">גובה: </p>
      <q-input class="inputAdd" dark v-model="localEditedProfile.height" color="red" type="number" :min="150" :max="230"
               label="height *" hint="150-230"/>
      <p class="inputTitle">דת: </p>
      <q-select class="inputAdd" dark  clearable filled color="red" v-model="localEditedProfile.religion" :options="options"
                label="religion"/>
      <q-btn size="20px" class="a-btn text-weight-bold glossy"  @click="dialog ++">המשך</q-btn>
    </q-card>




    <q-card class="c-title" v-if="dialog === 4">
      <p class="inputTitle">תמונת פרופיל: </p>

      <q-input class="inputAdd" dark v-model="localEditedProfile.image" @click="click1" @change="previewImage1" ref="input1"
               filled type="file" label="profile pic"/>

      <p class="inputTitle">עוד תמונות: </p>

      <q-input class="inputAdd" dark v-model="localEditedProfile.pic" @click="click1" @change="previewImage" ref="input1" filled
               type="file" label="profile pic"/>

      <p class="inputTitle">קצת על עצמי: </p>
      <q-input class="inputAdd" dark v-model="localEditedProfile.onme" filled clearable type="textarea" style="height: 120px" label="קצת על עצמי *"/>
      <q-btn v-if="!profile" size="15px"
             style="background: darkred; margin-top: 20px; margin-right: 50%; color: white"
             label="המשך לפרופיל" @click="insert()"/>
      <q-btn v-else size="15px"
             style="background: darkred; margin-top: 20px; margin-right: 40%; color: white"
             label="עדכן פרופיל" @click="update()"/>
      <q-btn size="20px" class="a-btn text-weight-bold glossy"  @click="dialog = 1">המשך</q-btn>
    </q-card>












    <br>


    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
  </q-page>
</template>

<script>
const inputs = ['primary', 'secondary'];
import localStorageDriver from '../Driver/Local-Storage'
import firebaseInstance from '../Driver/firebase';
import {mapMutations, mapState, mapActions,} from 'vuex';

export default {
  name: "AddProfile",
  props: ['tableName'],
  computed: mapState('profiles', ['editedProfile', "profile"]),

  data() {
    return {
      dialog:1,
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
    if(this.profile){
      this.dialog =2
    }
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



</script>

<style scoped>

.picAdd{
  background-image: url("https://mail.google.com/mail/u/2?ui=2&ik=b9425fd237&attid=0.1&permmsgid=msg-a:r-2818125448641862777&th=177da7f9710ff0e6&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9q7dkbX7ytUqIVZANF1adk8dYf9Hz-gEt7FYV3ZKG8vFp4KIHsW33AcWpQvQycRGxEnvAY5iu4bQsvOfosscVQcnDSBXd_sAvO3QbhwaUStAVIvLIJ63jsBk0&disp=emb&realattid=177da7f1de5207cf5f03");
  background-repeat: no-repeat;

  background-size: 500%;
  backdrop-filter: blur(8px);
}

.constrain{
  max-width: 975px;
  margin: auto;
}
.a-title {
  font-family:"Guttman Kav" ;
  width: 50%;
margin-right: 27%;
  padding: 1.5%  ;
  /*opacity: 0.85;*/
  font-size: 35px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  backdrop-filter: blur(50px);
  color: white;
  margin-top: 10px;
  /*display: inline-block;*/
}
.b-title {
  margin-top: 5%;
  padding: 10px 100px 10px 100px;
  opacity: 0.85;
  font-size: 25px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  backdrop-filter: blur(50px);
  color: white;
  /*display: inline-block;*/
}

.c-title {
  width: 75%;
  margin-right: 12%;
  padding: 1.5%  ;
  /*opacity: 0.85;*/
  font-size: 35px;
  /*text-align: center;*/
  border-radius: 20px;
  border: none;
  background-color: transparent;
  backdrop-filter: blur(50px);
  color: white;
  margin-top: 10px;
  /*display: inline-block;*/
}

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

.inputTitle {

  padding: 0px 20px 0px 20px;
  opacity: 0.8;
  font-size: 20px;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: red;
  margin-top: 10px;
  display: inline-block;
  cursor: copy;
}

.inputtitle1 {


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

  margin-right: 50%;
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

.inputAdd {
  margin-right: 7%;
  max-width: 85%;
  direction: rtl

}
.a-btn {
background-color: darkred;
  margin-top: 10%;
  margin-right: 80%
}
</style>