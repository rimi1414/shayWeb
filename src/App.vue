<template dir="rtl">

  <q-layout view="lHh Lpr lFf" dir="rtl">
    <q-header elevated class="glossy">
      <q-toolbar class="glossy">

        <q-btn v-if="$route.fullPath.includes('/login')"
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
        />

        <template>
          <q-btn v-if="!userDetails.userId" icon="account_circle" label="login" />
<!--          <q-btn v-if="$route.fullPath.includes('/login')" icon="account_circle" label="login" />-->
          <q-btn v-else @click="logoutUser()" icon="account_circle" > logout <br> {{userDetails.name}}</q-btn>

          <div class="btm1"  v-if="!$route.fullPath.includes('/login')">
<!--            <q-btn size="12px"  @click="logout()"-->
<!--                   style="background: darkred; color: white" label="התנתק"/>-->
          </div>
          <div class="btm2" v-if="!$route.fullPath.includes('/login')">
<!--            <q-btn  v-go-back.single size="12px" style="background: darkred; color: white" label="חזרה"/>-->
            <q-btn  @click="goToback()" size="12px" style="background: darkred; position: absolute; margin-right: 20px; margin-top: 67px; opacity: 40%; width: 70px; color: white"  />
            <q-btn v-go-back.single class="btm6"  style="color: white; width: 100px; margin-left: 300px; position: relative" flat dense label="back" icon="arrow_back" />
          </div>

          <q-toolbar-title class="tonda-t">

          </q-toolbar-title>

          <div @click="goToFirst()" class="tondi">tonda</div>
          <div v-if="!$route.fullPath.includes('/login')" style="margin-right: 75%; margin-top: 02%; position: absolute"  @click="goToPrifiles()">
            <q-btn  size="12px" style="background: darkred; color: white" label="פרופילים"/>
          </div>
          <div v-if="!$route.fullPath.includes('/login')" class="btm4" @click="goToPrifile()">
            <q-btn  icon="person_search" round size="12px" style="background: darkred; color: white"  />
<!--            <q-btn  size="12px" style="background: darkred; color: white" label="פרופיל אישי"/>-->
          </div>
          <div v-if="!$route.fullPath.includes('/login')" class="btm5" @click="goToPrifile()">    </div>
          <div class="btm7">
            <q-btn @click="gochat()" style="margin-left: 20%"  color="darkred" flat dense label="הודעות" icon="mail" />
          </div>
          <q-btn class="loginbtn" v-if="$route.fullPath.includes('/login')" icon="account_circle" label="login" />

        </template>



      </q-toolbar>
    </q-header>

<!--    <q-drawer-->
<!--        v-model="leftDrawerOpen"-->
<!--        show-if-above-->
<!--        bordered-->
<!--        content-class="bg-grey-2"-->
<!--    >-->
<!--      <q-list>-->
<!--        <q-item-label header>אפשרויות נוספות</q-item-label>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="school"/>-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Docs</q-item-label>-->
<!--            <q-item-label caption>quasar.dev</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="code"/>-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Github</q-item-label>-->
<!--            <q-item-label caption>github.com/quasarframework</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="chat"/>-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Discord Chat Channel</q-item-label>-->
<!--            <q-item-label caption>chat.quasar.dev</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="forum"/>-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Forum</q-item-label>-->
<!--            <q-item-label caption>forum.quasar.dev</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="rss_feed"/>-->
<!--          </q-item-section>-->
<!--          <q-item-section>-->
<!--            <q-item-label>Twitter</q-item-label>-->
<!--            <q-item-label caption>@quasarframework</q-item-label>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--      </q-list>-->
<!--    </q-drawer>-->

<div style="background-color:darkgray">




    <q-page-container style="margin-top: -30px">
      <router-view></router-view>
    </q-page-container>
</div>
  </q-layout>
</template>

<script>
import firebaseInstance from './Driver/firebase'
import Home from "@/views/Home";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'LayoutDefault',
  computed: {...mapState('profiles', [ 'profileId']), ...mapState('chat', ['userDetails'])},

  data() {
    return {
      leftDrawerOpen: false
    }
  },

  methods :{
    ...mapMutations('profiles', ['setProfileId']),
    ...mapActions('profiles', [ 'getOneProfile']),
    ...mapActions('chat', [ 'handleAauthStateChanged', 'logoutUser']),
    goToFirst(){
      this.$router.push(`/First`)
    },
    goToPrifiles(){
      this.$router.push(`/profiles`)
    },
    goToback(){
      this.$router.go(-1)
    },
    goToPrifile(){
      this.setProfileId(`${window.user.uid}`)
      const w = this.$route.fullPath
      if(w !== '/profile/:id'){
        this.getOneProfile();
      }
      this.getOneProfile();
      this.$router.push(`/profile/${window.user.uid}`);

    },
    gochat(){
      this.$router.push('/pageUser');
    },
    logout(){
      firebaseInstance.firebase.auth()
          .signOut()
          .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      this.$router.push('/login');
    },


  },

mounted() {
    this.handleAauthStateChanged()
},

  components: {
    Home
  },


}
</script>

<style >


.tondi {
  position: absolute;
  margin-right: 40%;
  cursor: pointer;

}

.glossy {
  height: 90px;
  text-align: center;
  font-size: 50px;
  font-weight: 800;
  color: hsl(0, 100%, 30%);
  background-color: black;
}

.btm1 {
  font-size: 100px;

  margin-right: 10px;
  margin-top: 30px;
}


.btm2 {
  font-size: 100px;

  margin-right: 10px;
  margin-top: 30px;
}
.btm3{
  font-size: 100px;

  margin-left: 1%;
  margin-top: 30px;

}
.btm4{
  font-size: 100px;

  margin-left: 2%;
  margin-top: 30px;

}
.btm5{
  font-size: 100px;
  /*margin-left: 10%;*/
  margin-top: 30px;
}
.btm6{
  color: white;
  margin-left: 20px;
}
.btm7{
 margin-top: 40px;
  margin-left: 20px;
}
.loginbtn{
  margin-left: 3%;
}
.input {
  margin-right: 40%;
}
</style>
