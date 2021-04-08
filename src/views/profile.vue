<template>
  <div>
    <br><br><br>


    <ProfilesTable class="tableV" :profile="profile" :tableName="tableName" :isReload="isReload"></ProfilesTable>
    <div class="carusel">
      <caruseloneprofile  />-->
<!--        <carusel  :profiles="[profile]" :forSerch="forSerch" :rowsSerch="rowsSerch" />-->
    </div>
    <br>  <br>  <br>  <br>  <br>  <br>

    <AddProfile v-if="(profileid == x)" :profile="profile" :tableName="tableName" @addProfile="changeData"></AddProfile>

  </div>

</template>

<script>

import AddProfile from "@/components/AddProfile";
import ProfilesTable from "@/components/ProfilesTable";
import caruseloneprofile from "@/components/caruseloneprofile";
import carusel from "@/components/carusel";
import firebaseDatabase from "@/Driver/firebase/database";
import {mapActions, mapMutations, mapState} from "vuex";
import firebaseInstance from '../Driver/firebase';
// import storege from '../Driver/firebase/storege'



export default {
  name: "profile",
  components: {
    AddProfile, ProfilesTable, carusel, caruseloneprofile
  },
  // computed: mapState('profiles', ['editedProfile', 'profile'] ),
  data() {
    return {
      x: null,
      profileid: 2,
      // profile: null,
      id: 0,
      tableName: 'profiles',
      isReload: false
    }
  },
  computed: { ...mapState('profiles', ['model3', 'profiles'])},
  methods: {
    ...mapMutations('profiles', ['setEditedProfile', 'setEditedProfileId', 'resetProfile', 'setProfileId','setLev']),
    ...mapActions('profiles', ['insertProfile', 'updateProfile', 'getOneProfile']),
//     getProfileById(id) {
//       firebaseDatabase.getmyprofile({entity: this.tableName, id:id})
//           .then(result => {
//             this.profile = result;
//             this.profiles= result
//
//           })
// // this.profile = localStorageDriver.getProfileById(this.tableName , this.$route.params.id )
//
//     },
    changeData() {
      this.isReload = !this.isReload
    }
  },
  created() {
    // this.id = this.$route.params.id
this.setProfileId(this.$route.params.id)
    this.getOneProfile()
        .then(()=>{
          this.setLev(false)
      for(let i = 0; i <this.profiles.length; i++){
        if (this.profiles[i].id = `${window.user.uid}`){

          const love = this.profiles[i].lev
          for (const key in love){
            if(this.$route.params.id == love[key]){
              this.setLev(true)
            }

          }
        }
      }
    })
    // this.setEditedProfileId(this.$route.params.id)
    // this.setEditProfileById(this.$route.params.id)
    //     .then(() => {
    //       Object.assign(this.localEditedProfile, this.editedProfile)
    //     })
          // this.getProfileById(`${window.user.uid}`);
    this.x = `${window.user.uid}`;
    this.profileid = this.$route.params.id
  },
destroyed() {

    this.resetProfile();
}
}
</script>

<style scoped>
/*.pic1{*/
/*  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/iUgJMzIl9QRRYez0cDeNRN0IR9N2%2Fprofile%2Fmountains.jpg?alt=media&token=47898fa3-49d4-4220-8d9a-2e0243b8b040");*/
/*  background-size:100%;*/

/*  backdrop-filter: blur(8px);*/

/*}*/
.pic{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/iUgJMzIl9QRRYez0cDeNRN0IR9N2%2Fimages%2Fmountains.jpg?alt=media&token=0801d8f4-efb7-4e46-876d-143a4389a8a6");
  background-size:100%;
  backdrop-filter: blur(8px);

}
.carusel{
margin-top: -44%;
  margin-right: 50%;
}
.tableV{
  /*margin-right: 3%;*/
}
</style>