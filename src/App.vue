<template  dir="rtl">


  <q-layout view="lHh Lpr lFf" dir="rtl" >
    <q-header  elevated style="opacity: 0.4">

    </q-header>


    <div >
      <div style="margin-top: 3%">
        <router-view></router-view>
      </div>
    </div>
  </q-layout>
</template>

<script>
import Home from "@/views/Home";

export default {
  name: 'LayoutDefault',


  data() {
    return {
      screenSize: window.innerWidth,
      leftDrawerOpen: false
    }
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

.zuz {
  animation: bounce .6s alternate infinite ease-in;
}





  @keyframes bounce {
    0% {
      transform: translatey(3%);
    }

  }

  h1 {
    /*color: red;*/
    font-family: "Guttman Kav";
    /*margin-top: 50%;*/
    /*display: inline-block; !*needed to trigger update *!*/
  }



</style>
