<template>
  <q-page class="q-pa-md" style="background: #1D1D1D">

    <br>
    <br>
<div :class=" screenSize < 600 ? 'welcome-anima-mobile' : 'welcome-anima-desk'">ברוך הבא</div>
<div :class=" screenSize < 600 ? 'welcome-anima2-mobile' : 'welcome-anima2-desk' ">לטונדה</div>
    <q-card :class="screenSize < 600 ? ' margin' : 'desktop'" >
      <q-tabs
          v-model="tab"
          dense
          class="text-grey glossy"
          style="background-color: black"
          active-color="red"
          indicator-color="black"
          align="justify"
          narrow-indicator
      >
        <q-tab name="login" label="login" />
        <q-separator vertical color="white" />
        <q-tab name="register" label="register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <loginregister :tab ="tab"/>
        </q-tab-panel>

        <q-tab-panel name="register">
          <loginregister :tab= "tab" />
        </q-tab-panel>


      </q-tab-panels>
    </q-card>

  </q-page>

</template>

<script>
import firebaseInstance from '../Driver/firebase'
import loginregister from "@/components/login/loginregister";
export default {
name: "first",
  components: {
   loginregister
  },
  data () {
    return {
      screenSize:window.innerWidth,
      tab: 'login',
      inputdata :{
        email: '',
        username: '',
        password: '',
        emaillog: '',
        passwordlog: ''
      }

    }
  },

  created() {
  if (window.user){
    this.$router.push('/profiles')
  }
  }
}
</script>

<style scoped>
.margin{
  margin-right: 1.5%;
width: 97%;
  margin-top: 20%;
}
.backNone{
  display: none;
}
.welcome-anima-desk{
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 50px;
  width: 300px;
  height: 100px;
  margin-top: -8%;
  position: absolute;
  color: black;
  animation-name: welcome-desk;
  animation-duration: 20s;
  animation-delay: -10s;
  z-index: 1;
  display: initial;
}
.welcome-anima-mobile{
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 45px;
  width: 300px;
  height: 100px;
  margin-top: -10%;
  font-weight: bold;
  position: absolute;
  color: black;
  animation-name: welcome-mobile;
  animation-duration: 20s;
  animation-delay: -10s;
  z-index:2;
  display: initial;
}
.welcome-anima2-desk{
  font-size: 50px;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  width: 200px;
  height: 100px;
  margin-top: -8%;
  position: absolute;
  color: black;
  animation-name: welcome-desk2;
  animation-duration: 20s;
  animation-delay: -10s;
  z-index: 1;
  display: initial;
}
.welcome-anima2-mobile{
  font-size: 50px;
  font-weight: bold;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  width: 200px;
  height: 100px;
  margin-top: -10%;
  position: absolute;
  color: black;
  animation-name: welcome-mobile2;
  animation-duration: 20s;
  animation-delay: -10s;
  z-index: 1;
  display: initial;
}
@keyframes welcome-desk {

  25%  {color: red; left: 1100px; top:200px; display: block}
  50%  {color: darkred; left:1500px; top:200px; display: block}
  75%  {color: darkred; left:600px; top:200px; display: block}

}
@keyframes welcome-desk2 {

  25%  {color: red; left:100px; top:300px; display: block}
  50%  {color: darkred; left:100px; top:300px; display: block}
  75%  {color: darkred; left:700px; top:300px; display: block}

}
@keyframes welcome-mobile {

  25%  {color: red; left:1700px; top:300px; display: block}
  50%  {color: red; left:1100px; top:300px; display: block}
  75%  {color: darkred; left:0px; top:300px; display: block}

}
@keyframes welcome-mobile2 {

  25%  {color: red; left:-1300px; top:350px; display: block}
  50%  {color: red; left:-700px; top:350px; display: block}
  75%  {color: darkred; left:100px; top:350px; display: block}

}
.glossy {
  text-align: center;
}
.desktop{
  margin-top: 2%;
 margin-right: auto;
 margin-left: auto;
  width: 1000px;
}

</style>