<template >
  <q-page >
  <div >
    <br><br>

<div class="row"  >



  <q-btn v-if="propsi===true" class= "b-bnt glossy">
   join now
  </q-btn>

  <q-btn v-if="propsi === false" class= "b-bnti glossy" style="font-size: 10px">
    join now
  </q-btn>
</div>








  </div>
  </q-page>
</template>

<script>



export default {
  name: "AddProfile",

props:['propsi'],
  data() {
    return {

      screenSize: window.innerWidth,


    }
  },

}



</script>

<style scoped>



.b-bnt {
  /*width: 20%;*/
  height: 100%;
  font-family:"Guttman Kav" ;
  margin-top: 5%;
  padding: 10px 50px 10px 50px;
  opacity: 0.95;
  font-size: 25px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  background-color: rgba(0,0,0, 0.2);
  backdrop-filter: blur(50px);
  color: white;
  /*display: inline-block;*/
}
.b-bnt {
  /*width: 20%;*/
  height: 100%;
  font-family:"Guttman Kav" ;
  margin-top: 5%;
  padding: 10px 50px 10px 50px;
  opacity: 0.95;
  font-size: 25px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  background-color: rgba(0,0,0, 0.2);
  backdrop-filter: blur(50px);
  color: white;
  /*display: inline-block;*/
}

@media screen and (max-width:600px) {



  .b-bnt{
    font-size: 10px;
    padding: 5px 25px 10px 25px;
  }

}

</style>