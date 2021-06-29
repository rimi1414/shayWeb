<template dir="rtl">


  <q-layout view="lHh Lpr lFf" dir="rtl">
    <q-header elevated class="glossy">
      <h1 v-if="$route.fullPath.includes('/profile/') && screenSize > 600" class="fixed-bottom-left">tonda</h1>
      <q-toolbar class="glossy">

        <div v-if="!$route.fullPath.includes('/login')">
          <q-btn class="fixed-top-right" style="margin-top: 3%; margin-left: 1%"
                 color="white"
                 @click="logout()"
                 dense
                 flat
                 icon="logout"
                 round
                 size="18px">
          <q-tooltip>התנתק</q-tooltip>
          </q-btn>
        </div>


        <div class="btnHead row" v-if="!$route.fullPath.includes('/login')">
          <q-btn
              class="q-mr-sm"
              dense
              flat
              color="white"
              icon="people"
              round
              size="18px"
              to="/profiles">
            <q-tooltip>פרופילים</q-tooltip>
          </q-btn>


          <p class="fixed-top nameDesct">hey {{ userDetails.name }} </p>


          <q-btn
              :class="screenSize>600 ? 'q-mr-md q-ml-md' : 'q-mr-sm'"
              dense
              flat
              round
              size="18px"
              @click="goToProfile"
          >
            <q-tooltip> my profile</q-tooltip>
            <q-avatar style="width: 30px; height: 30px">
              <img src="https://www.photo-art.co.il/wp-content/uploads/2015/07/BY1A5781.jpg">
            </q-avatar>
          </q-btn>

          <q-btn
              dense
              flat
              color="white"
              icon="mail"
              round
              size="18px"
              to="/pageUser">
            <q-tooltip>הודעות</q-tooltip>
          </q-btn>
        </div>


        <div v-if="screenSize <600" style="margin-right: 65%; margin-top: 12%">
          <p v-if="!$route.fullPath.includes('/profile/')" class="title">
            tonda
          </p>
        </div>
        <p v-if="!$route.fullPath.includes('/profile/') && screenSize >600" class="title">
          tonda
        </p>

      </q-toolbar>

    </q-header>


    <div style="background-color:darkgray">
      <div style="margin-top: 3%">
        <router-view></router-view>
      </div>
    </div>
  </q-layout>
</template>

<script>
import firebaseInstance from './Driver/firebase'
import Home from "@/views/Home";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'LayoutDefault',
  computed: {...mapState('profiles', ['profileId']), ...mapState('logUser', ['userDetails'])},

  data() {
    return {
      screenSize: window.innerWidth,
      leftDrawerOpen: false
    }
  },

  methods: {
    ...mapMutations('profiles', ['setProfileId']),
    ...mapActions('profiles', ['getOneProfile']),
    ...mapActions('logUser', ['handleAauthStateChanged', 'logoutUser']),


    goToProfile() {
      this.setProfileId(`${window.user.uid}`)
      const w = this.$route.fullPath
      if (w !== '/profile/:id') {
        this.getOneProfile();
      }
      this.getOneProfile();
      this.$router.push(`/profile/${window.user.uid}`);

    },

    logout() {
      this.logoutUser()

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

<style>
.title {
  animation: bounce .5s alternate infinite ease-in;
  /*margin-top: 1.5%;*/
  margin-right: 90%;
  font-size: 35px;
  font-family: "Guttman Kav";
}

.btnHead {
  position: absolute;
  margin-top: 1%;
  margin-right: 43%;
}

.nameDesct {
  position: absolute;
  /*margin-top: -14%;*/
  font-size: 20px;
  color: white;
}


.glossy {
  height: 90px;
  text-align: center;
  font-size: 50px;
  color: hsl(0, 100%, 30%);
  background-color: black;
}

h1 {
  animation: bounce .5s alternate infinite ease-in;
}


@media only screen and (max-width: 600px) {
  .btnHead {
    position: absolute;
    margin-top: 12%;
    margin-right: 25%;
  }

  .title {
    margin-top: 10%;
    margin-right: 63%;

  }
}

@media screen and (min-width: 600px) {

  @keyframes bounce {
    0% {
      transform: translatey(10%);
    }

  }

  h1 {
    color: red;
    font-family: "Guttman Kav";
    margin-top: 50%;
    /*display: inline-block; !*needed to trigger update *!*/
  }
}


</style>
