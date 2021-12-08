<template >
  <q-page >
  <div >
    <br><br>

<div class="row" v-if="screenSize>600"  >


    <q-card  class= "b-title "  style="margin-right: 2%" >
<q-btn flat icon="headset_mic   " color="black" :size="`${screenSize/50}px`"/>
      <p :style="`filter: brightness(250%); direction: ltr; font-size: ${screenSize/65}px; font-family: Tahoma`"><b> Expert support </b></p>
      <div :style="screenSize === false ? `font-size: ${screenSize/90}px`: `font-size: ${screenSize/90}px`">
        <p style=" font-family: Tahoma">Marketing and technical support team  </p>
       <p style=" font-family: Tahoma">   24/7 support hours </p>
      <p style=" font-family: Tahoma">API / S2S</p>
</div>
    </q-card>
  <q-card  class= "b-title " style="margin-right: 4%">

    <q-btn flat icon="query_statss" color="black" :size="`${screenSize/50}px`"/>
    <div :style="screenSize === false ? `font-size: ${screenSize/90}px`: `font-size: ${screenSize/90}px`">
      <p :style="`filter: brightness(250%); direction: ltr; font-size: ${screenSize/65}px; font-family: Tahoma`"><b> Expert Marketing & Monetizing </b></p>
        <p style=" font-family: Tahoma">Best offers / CPA </p>
    <p style=" font-family: Tahoma"> Very high lead caps</p>
    <p style=" font-family: Tahoma">   Best conversion rate</p>
    <p style=" font-family: Tahoma">    Countries : +150</p>
    <p style=" font-family: Tahoma">    Many direct brands worldwide</p>
    <p style=" font-family: Tahoma">   with native languages</p>
    <p style=" font-family: Tahoma">  LandingPages</p>
</div>
    </q-card>
  <q-card  class= "b-title "  style="margin-right: 4%" >

    <q-btn flat icon="paid" color="black" :size="`${screenSize/50}px`"/>
      <p :style="`filter: brightness(250%); direction: ltr; font-size: ${screenSize/65}px; font-family: Tahoma` "><b> Expert payment  </b></p>
        <p style=" font-family: Tahoma"> Payment solutions : Bank wire or Crypto</p>
    <div :style="screenSize === false ? `font-size: ${screenSize/90}px`: `font-size: ${screenSize/90}px`">
    <p style=" font-family: Tahoma">    Account solutions</p>
    <p style=" font-family: Tahoma">  Payment always on time</p>
    <p style="visibility: hidden">ssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
</div>
    </q-card>
</div>

    <div class="row" v-else >


      <q-card  class= "b-titleM "  :style="screenSize>400? 'margin-right: 2%' :''" >
        <q-btn flat icon="headset_mic   " color="black" size="15px"/>
        <p style="filter: brightness(250%); direction: ltr; font-size: 16px"><b> Expert support </b></p>
        <p>Marketing and technical support team  </p>
        <p>   24/7 support hours </p>
        <p>API / S2S</p>

      </q-card>
      <q-card  class= "b-titleM " style="margin-right: 4%">

        <q-btn flat icon="query_statss" color="black" size="15px"/>
        <div>
        <p style="filter: brightness(250%); direction: ltr; font-size: 14px"><b> Expert Marketing </b></p>
        <p style="margin-top: 0%">Best offers / CPA </p>
        <p style="margin-top: -10%"> Very high lead caps</p>
        <p style="margin-top: -10%">   Best conversion rate</p>
        <p style="margin-top: -10%">    Countries : +150</p>
        <p style="margin-top: -10%">    Many direct brands worldwide</p>
        <p style="margin-top: -10%">   with native languages</p>
        <p style="margin-top: -10%">  LandingPages</p>
    </div>
      </q-card>
      <q-card  class= "b-titleM "  style="margin-right: 4%" >

        <q-btn flat icon="paid" color="black" size="15px"/>
        <p style="filter: brightness(250%); direction: ltr; font-size: 16px; "><b> Expert payment  </b></p>
        <p> Payment solutions : Bank wire or Crypto</p>

        <p>    Account solutions</p>
        <p>  Payment always on time</p>
        <p style="visibility: hidden">ssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

      </q-card>
    </div>







  </div>
  </q-page>
</template>

<script>



export default {
  name: "AddProfile",
  props:['prop'  ],

  data() {
    return {
      picChat:'',
      screenSize: window.innerWidth,

    }

  },

}



</script>

<style scoped>




.b-title {
  border-style: solid ;
/*border-width: 4px;*/
  width: 30%;
  /*height: 120%;*/
  font-family:"Guttman Kav" ;
  margin-top: 5%;
  padding: 50px 50px 50px 50px;
  opacity: 0.8;

  text-align: center;
  border-radius: 20px;
  /*border: none;*/
  background-color: transparent;
  background-color: rgba(0,0,0, 0.2);
  backdrop-filter: blur(50px);
  color: white;
  /*display: inline-block;*/
}
.b-title :hover{
  opacity: 0.3;



}
.b-titleM {
  border-style: solid ;
  /*border-width: 4px;*/
  width: 30%;
  /*height: 120%;*/
  font-family:"Guttman Kav" ;
  margin-top: 5%;
  padding: 0px 0px 0px 0px;
  opacity: 0.8;
  font-size: 14px;
  text-align: center;
  border-radius: 20px;
  /*border: none;*/
  background-color: transparent;
  background-color: rgba(0,0,0, 0.2);
  backdrop-filter: blur(50px);
  color: white;
  /*display: inline-block;*/
}
.b-titleM :hover{
  opacity: 0.3;



}
@media screen and (max-width:400px) {
  .b-titleM{
margin-left: -3%;
  }

}
</style>