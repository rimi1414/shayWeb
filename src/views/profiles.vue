<template>
  <div class="pic1">

<!--    <carusel  :profiles="rows" :forSerch="forSerch" :rowsSerch="rowsSerch" />-->
    <ProfilesTable  :tableName="'profiles'" class="pic1"/>
    <br>
    <br>
    <br>
    <br>
<!--    <ProfilesTable1  :tableName="'profiles'" class="pic2"/>-->
    <br>
    <br>
    <br>
    <br>
<!--    <page-user @isis="realsech" :tableName="'profiles'"/>-->
    <br>
    <br>
    <br>
<!--    <page-chat @isis="realsech" :tableName="'profiles'"/>-->
  </div>
</template>

<script>
// import carusel from "@/components/carusel";
import ProfilesTable from "@/components/ProfilesTable";
import ProfilesTable1 from "@/components/ProfilesTable1";
// import PageUser from "@/components/pageUser";
// import PageChat from "@/components/pageChat";

import {mapMutations, mapState, mapActions} from 'vuex';

// import AddProfile from "@/components/AddProfile";
export default {


  name: "profiles",
  components: {


    ProfilesTable,
    ProfilesTable1
  },



  created() {
    if (!window.user){
      this.$router.push('/login')
  }


},

}
</script>

<style scoped>

.pic1{
  background-image: url("https://mail.google.com/mail/u/0?ui=2&ik=b9425fd237&attid=0.1&permmsgid=msg-a:r-2818125448641862777&th=177da7f9710ff0e6&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_3UqhB-LH6BzgnroJQ_DUjHv54OQRoTgR4KFWC4XSZWisl0vK4xrswvhvC-IA_KiZcCyukpmvF_SSrHMGkEvYuWQQCOZLT5yeYugzuEbv7b03Zfy6lI-E8cI8&disp=emb&realattid=177da7f1de5207cf5f03");
  background-size:100%;

}
.pic{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/iUgJMzIl9QRRYez0cDeNRN0IR9N2%2Fimages%2Fmountains.jpg?alt=media&token=0801d8f4-efb7-4e46-876d-143a4389a8a6");
  background-size:100%;
  backdrop-filter: blur(8px);

}
</style>