<template>

<!--  todo: fix the style of the dialog-->


  <div style=" background-color: #1D1D1D; height: 500%" >
    <div :class=" screenSize >600 ? 'contain' : 'containMobile'">
<q-card :class="screenSize < 600 ? 'card-btn-mobile' : 'card-btn-desct'" >
      <q-btn v-if="bool === true" color="withe" icon="image"  size="17px"  @click="displayTable()" class="btn1"/>
      <q-btn v-if="bool === false"  color="withe"  icon="assignment_ind"  size="17px"  @click="displayCarousel()" class="btn1"/>
</q-card>

      <div class="q-pa-md">
        <q-card :style="screenSize >600 ? 'margin-top:10%' : 'margin-top: 20%'">
          <q-parallax
              :src="profile.pic"
              :height="screenSize > 600 ?  250 : 150 "
              :class=" screenSize > 600 ?  'cardPicDesct' : 'cardPic'"
             />
        </q-card>
      </div>

<q-card :class="screenSize > 600 ? 'c-avatarDesct' : 'c-avatarMobile'"  flat>
      <q-avatar  :class="screenSize > 600 ? 'avatarDesct' : 'avatar'" >
        <img  :src="profile.image"/>
      </q-avatar>
</q-card>

      <q-card class="no-padding no-margin row back">

    <q-card class="desktopChat"  id="tableElementId" >
      <ProfilesTable :style="screenSize > 600? 'margin-top: 7%' : 'margin-top: 10%'" :profile="profile" :tableName="tableName" :isReload="isReload" @update="updateProfile" ></ProfilesTable>
    </q-card>

        <br>  <br>  <br>  <br>  <br>  <br>
        <br><br><br><br>  <br><br><br><br>  <br><br><br><br>   <br><br><br><br> <br><br><br><br>   <br><br><br><br>    <br><br><br><br>    <br><br><br><br>
    <q-card :class="screenSize > 600 ? 'carousel-d' : 'carousel-m'" id="carouselElementId" style= "display: none" >
      <carouselOneProfile  />
    </q-card>

  </q-card>
      <q-dialog    v-model="updateMyProfile" >
        <q-card  :style="screenSize >600 ? 'width: 50%; direction: rtl' : 'width: 95%; direction: rtl; hei' " class="picAddMobile">
          <AddProfile v-if="(profileId === me) && this.updateMyProfile === true" :profile="profile" :tableName="tableName" @addProfile="changeData"></AddProfile>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>

import AddProfile from "@/components/allOfProfiles/AddProfile";
import ProfilesTable from "@/components/allOfProfiles/ProfilesTable";
import carouselOneProfile from "@/components/profile/carouselOneProfile";
import {mapActions, mapMutations, mapState} from "vuex";



export default {
  name: "profile",
  components: {
    AddProfile, ProfilesTable, carouselOneProfile
  },

  data() {
    return {
      bool: true,
      screenSize: window.innerWidth,
      updateMyProfile: false,
      me: null,
      profileId: 2,
      id: 0,
      tableName: 'profiles',
      isReload: false
    }
  },
  computed: { ...mapState('profiles', [ 'profiles', 'profile'])},
  methods: {
    ...mapMutations('profiles', ['setEditedProfile', 'setEditedProfileId', 'resetProfile', 'setProfileId' , 'resetMyProfile']),
    ...mapActions('profiles', ['insertProfile', 'updateProfile', 'getOneProfile']),


     displayTable() {
       document.getElementById("tableElementId").style.display = "none"
       document.getElementById("carouselElementId").style.display = "block"
       this.bool = false
},
    displayCarousel() {
      document.getElementById("carouselElementId").style.display = "none"
      document.getElementById("tableElementId").style.display = "block"
      this.bool= true
    },
    updateProfile(){
      this.updateMyProfile =true
    },
    changeData() {
      this.isReload = !this.isReload
    }
  },
  created() {
    this.getOneProfile()
    if (!window.user){
      this.$router.push('/login')
    }
    this.setProfileId(this.$route.params.id)
    this.getOneProfile()
    this.me = `${window.user.uid}`;
    this.profileId = this.$route.params.id
  },
  destroyed() {
this.resetMyProfile();
    this.resetProfile();
  }
}
</script>

<style scoped>

.carousel-m{
  width: 20%;
  margin-top: 25vh;
  margin-right: 25%;
  /*position: absolute;*/
  height: 100%;
  background-color: rgba(0,0,0, 0.0)
}
.carousel-d{
  width: 100%;
  margin-top: 25vh;
  margin-right: 25%;
  position: absolute;
  height: 100%;
  background-color: rgba(0,0,0, 0.0)
}
.containMobile{

}
.contain{
  max-width: 975px;
  margin: auto;
}
.cardPic{

}
.cardPicDesct{
margin-top: -5%;
}
.avatar{

  z-index: 1 ;
  /*position: absolute;*/
  margin-top: -20%;
  margin-right: 18%;
  width: 80%;
  height: 65%
}
.avatarDesct{
  z-index: 1 ;
  position: absolute;
  margin-top: -22vh;
  margin-right: 25%;
  width: 68%;
  height: 42vh
}
.c-avatarMobile{
  border-radius: 50%;
  background-color: rgba(0,0,0, 0);
  position: absolute
}
.c-avatarDesct{
  border-radius: 50%;
  background-color: rgba(0,0,0, 0);
}
.pic{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/iUgJMzIl9QRRYez0cDeNRN0IR9N2%2Fimages%2Fmountains.jpg?alt=media&token=0801d8f4-efb7-4e46-876d-143a4389a8a6");
  background-size:100%;
  backdrop-filter: blur(8px);

}
.carousel{
  margin-top: -30%;
  margin-right: 50%;
}

.picAdd{
  background-image: url("https://mail.google.com/mail/u/2?ui=2&ik=b9425fd237&attid=0.1&permmsgid=msg-a:r-2818125448641862777&th=177da7f9710ff0e6&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9q7dkbX7ytUqIVZANF1adk8dYf9Hz-gEt7FYV3ZKG8vFp4KIHsW33AcWpQvQycRGxEnvAY5iu4bQsvOfosscVQcnDSBXd_sAvO3QbhwaUStAVIvLIJ63jsBk0&disp=emb&realattid=177da7f1de5207cf5f03");
  background-repeat: no-repeat;
  background-size: 100%;
}
.picAddMobile{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/%D7%9C%D7%91%D7%91%D7%95%D7%AA.png?alt=media&token=6e0a5c80-b1e7-47cc-aa77-40c897743512");
  background-repeat: no-repeat;
  background-size: 100%;
}
.mobilePhoto{
  width: 200%;
  margin-top: 20% ;
  position: absolute;
  background-color: rgba(0,0,0, 0.0)
}

.desktopChat{
  /*max-width: 975px;*/
  margin: auto;
  width: 100%;
  /*max-width: 80%;*/
  /*left: 30%;*/
  position: absolute;
  height: 100%;
  background-color: rgba(0,0,0, 0.0)


}

.desktopMenu{
  width: 100%;
  max-width: 50%;
  margin-top: 10% ;
  right: 50%;
  position: absolute;
  background-color: rgba(0,0,0, 0.0)
}
.back{
  background-color: rgba(0,0,0, 0.0)

}
.card-btn-desct{

  border-radius: 50%;
  position: absolute;
  z-index: 1;
  margin-top: 25vh;
  margin-right: 55%;
}
.card-btn-mobile{
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  margin-top: 15vh;
  margin-right: 80%;
}
.btn1{
border-radius: 50%;
background-color: black;

}
</style>