<template >
  <q-page class="picAdd" style="height: 1000px">
  <div class="constrain">
    <br><br>

<div  >
    <q-card v-if="profile" :class= "this.screenSize < 600 ? 'a-titleMobile glossy ' : ' a-title glossy'">
    <span   >       עדכון העדפות </span>
    </q-card>

      <br v-if="!profile && dialog === 1">      <br v-if="!profile &&dialog === 1">      <br v-if="!profile">

    <q-card  class= "b-title glossy"  v-if="dialog === 1 && !profile">
      <p>שלום {{userDetails.name}}, </p>
      <p> זה הזמן ליצור לעצמך את הפרופיל האישי על מנת שתוכל למצא את בחירת ליבך</p>
    <q-btn class="text-weight-bold shadow-10 glossy bg-red-10" @click="dialog ++">לחץ להתחיל</q-btn>
    </q-card>
</div>




<!--todo: fix this class and style-->
    <q-card class="c-title" v-if="dialog === 2">
      <p class= "inputTitle text-weight-bold ">אנא בחר את מגדרך</p>
      <br v-if="screenSize < 600">
      <q-btn size="20px" :class= "this.localEditedProfile.myGender === 'נקבה' ? 'girl-btn' : 'girlBoy-btn'" @click="girl()">נקבה</q-btn>
      <q-btn size="20px" :class= "this.localEditedProfile.myGender === 'זכר' ? 'boy-btn' : 'boyGirl-btn'"  @click="boy()">זכר</q-btn>
      <q-btn size="20px" class="a-btn text-weight-bold glossy" style="margin-top: 40%; "
             @click=" dialog++">המשך</q-btn>
    </q-card>


        <q-card class="d-title" v-if="dialog === 3">
          <p class= "inputTitle text-weight-bold">כינוי: </p>
          <q-input class="inputAdd" dark filled ref="name"  v-model="localEditedProfile.name" color="red" label="nickname *"
                   lazy-rules
                   :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <p class= "inputTitle text-weight-bold ">תאריך לידה: </p>
          <q-input class="inputAdd" dark   filled v-model="localEditedProfile.date"  type="date" color="red" label="date" hint=" date"
                   lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <p class="inputTitle text-weight-bold">אזור מגורים </p>
          <q-input class="inputAdd" dark filled v-model="localEditedProfile.Living" color="red"  label="Living *"/>
          <q-btn size="20px" class="a-btn text-weight-bold glossy"  @click="dialog ++">המשך</q-btn>
        </q-card>


    <q-card class="d-title" v-if="dialog === 4">
      <p class="inputTitle">סגנון גוף: </p>
      <q-badge  v-model="editedBody"   color="black">
        {{ editedBody }}
      </q-badge>
      <div @click="numberBody()">
        <q-slider class="inputAdd" dark reverse v-model="localEditedProfile.body" :min="0"
                  :max="50" color="black"
                  label-always/>
      </div>
      <p class="inputMiniTitle">חטוב/ה </p>
      <p class="inputMiniTitle2">מלא/ה </p>
      <br>


      <p class="inputTitle">גובה: </p>
      <q-input class="inputAdd" dark v-model="localEditedProfile.height" color="red" type="number" :min="150" :max="230"
               label="height *" hint="150-230"/>
      <p class="inputTitle">דת: </p>
      <q-select class="inputAdd" dark  clearable filled color="red" v-model="localEditedProfile.religion" :options="options"
                label="religion"/>
      <q-btn size="20px" class="a-btn text-weight-bold glossy"  @click="dialog ++">המשך</q-btn>
    </q-card>




    <q-card class="d-title" v-if="dialog === 5">
      <p class="inputTitle">תמונת פרופיל: </p>

      <q-input class="inputAdd" dark v-model="localEditedProfile.image" @click="click1" @change="previewImage1" ref="input1"
               filled type="file"/>

      <p class="inputTitle">עוד תמונות: </p>

      <q-input class="inputAdd" dark v-model="localEditedProfile.pic" @click="click1" @change="previewImage" ref="input1" filled
               type="file" />

      <p class="inputTitle">קצת על עצמי: </p>
      <q-input class="inputAdd" dark v-model="localEditedProfile.onme" filled clearable type="textarea" style="height: 120px" label="קצת על עצמי *"/>

      <q-btn v-if="!profile" size="15px"
             style="background: darkred; margin-top: 20px; margin-right: 50%; color: white"
             label="המשך לפרופיל" @click="insert()"/>
      <q-btn v-else size="15px"
             style="background: darkred; margin-top: 20px; margin-right: 40%; color: white"
             label="עדכן פרופיל" @click="update()"/>
<!--      <q-btn size="20px" class="a-btn text-weight-bold glossy"  @click="dialog = 1">המשך</q-btn>-->
    </q-card>







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

  computed: {...mapState('profiles', ['editedProfile', "profile"]),
...mapState('logUser', ['userDetails'])},
  data() {
    return {
      picChat:'',
      screenSize: window.innerWidth,
      dialog:1,
      editedBody: '(0- רזה | 50- שמן)',
      img1:'',
      localEditedProfile: {
        Living:'',
        myGender:'',
        hisGender:false,
        name: '',
        body: 19,
        // todo: this bodyt
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
    ...mapActions('chat', ['updateUserPic']),
    ...mapMutations('profiles', ['setEditedProfile', 'setEditedProfileId']),


    alll(){
      console.log('sss')
      alert("sdsd")
      alert("sdsd")
      alert("sdsd")
      alert("sdsd")
},

girl (){
  this.localEditedProfile.myGender = 'נקבה'
  this.localEditedProfile.hisGender ='זכר'
},
    boy(){
      this.localEditedProfile.myGender = 'זכר'
      this.localEditedProfile.hisGender ='נקבה'

    },

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
              this.localEditedProfile.pic =result;
              this.picChat =result

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
    // todo: check this gohome
    goToHome() {
      this.$emit('addProfile')
      this.goToProfiles();
    },
    insert() {
      this.localEditedProfile.body = localStorageDriver.bodyCalculator(this.localEditedProfile.body)
      this.localEditedProfile.date = localStorageDriver.ageCalculator(this.localEditedProfile.date)
      if (this.localEditedProfile.date === false){
        location.reload()
        return
      }
      this.localSetEditedProfile();
      this.insertProfile().then(()=>{
        this.updateUserPic( this.picChat );
      })

      this.$router.push('/profiles');
    },
    update() {
      this.localSetEditedProfile();
      this.updateProfile();
      this.goToHome()
    },
    goToProfiles() {
      this.$router.push(`/profiles`)
    },
    goToProfile() {
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
    // if (!window.user) {
    //   this.$router.push('/login')
    // }
  },

}



</script>

<style scoped>

.picAdd{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/%D7%9C%D7%91%D7%91%D7%95%D7%AA.png?alt=media&token=6e0a5c80-b1e7-47cc-aa77-40c897743512");
  background-repeat: no-repeat;
  background-position-y: 20%;
  background-size: 100%;

  z-index: 1;
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

.a-titleMobile {
  font-family:"Guttman Kav" ;

  margin-right: 6%;
  padding: 1.5% 0.5% 0 0.5%  ;
  font-size: 35px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  backdrop-filter: blur(50px);
  color: white;
  margin-top: 10px;
}

.b-title {
  height: 100%;
  font-family:"Guttman Kav" ;
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
  background-color: rgba(0,0,0, 0.4);
  width: 75%;
  margin-right: 12%;
  padding: 1.5%  ;
  font-size: 35px;
  border-radius: 20px;
  border: none;
  backdrop-filter: blur(50px);
  color: white;
  margin-top: 10px;
}
.d-title{
  background-color: rgba(0,0,0, 0.4);
  width: 75%;
  margin-right: 12%;
  padding: 1.5%  ;
  font-size: 35px;
  border-radius: 20px;
  border: none;
  backdrop-filter: blur(50px);
  color: white;
  margin-top: 10px;
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

.inputMiniTitle {


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

.inputMiniTitle2 {

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
  margin-right: 75%
}
.girl-btn{
  position: absolute;
  margin-top: 15%;
  margin-right: 40%;
  background-color: yellow;
}
.boy-btn{
  position: absolute;
  margin-top: 15%;
  margin-left: 10%;
  background-color: yellow;
}
.girlBoy-btn{
  position: absolute;
  margin-top: 15%;
  margin-right: 40%;
  background-color: green;
}
.boyGirl-btn{
  position: absolute;
  margin-top: 15%;
  margin-left: 10%;
  background-color: green;
}



@media screen and (max-width:600px) {

  .picAdd{
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    background-position-y: 0%;
    background-position-x: 40%;

  }

  .b-title{
    width: 80%;
    margin-top: 5%;
    margin-right: auto;
    margin-left: auto;
    font-size: 20px;
    padding: 5px 30px 5px 30px;

  }
.c-title{
  height: 35vh;
  width: 85%;
  margin-top: 10%;
  margin-right: 8%;
}
  .girlBoy-btn{
    margin-top: 7%;
    margin-right: 50%;

  }
  .boyGirl-btn{
    margin-top: 7%;
    margin-right: 15%;
    /*margin-top: 25%;*/

  }
  .girl-btn{
    margin-top: 10%;
    margin-right: 50%;
    background-color: yellow;
  }
  .boy-btn{

    margin-top: 10%;
    margin-right: 10%;
    background-color: yellow;
  }
  .inputTitle{
    font-size: 17px;
  }
  .d-title{
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    height: 63vh;
  }
}

</style>