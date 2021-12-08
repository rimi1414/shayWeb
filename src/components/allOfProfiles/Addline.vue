<template >


<!--  <div class="q-pa-md doc-container">-->



<!--    <div class="column items-end" style="height: 150px">-->
<!--      <div class="col">-->
<!--        One of three rows-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        One of three rows-->
<!--      </div>-->
<!--      <div class="col">-->
<!--        One of three rows-->
<!--      </div>-->
<!--    </div>-->


<!--    <div class="column" style="height: 150px">-->
<!--      <div class="col self-start">-->
<!--        .self-start-->
<!--      </div>-->
<!--      <div class="col self-center">-->
<!--        .self-center-->
<!--      </div>-->
<!--      <div class="col self-end">-->
<!--        .self-end-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->





  <div style="height: 50px" >


<div  >

  <h1 style="   font-size: 40px ; color: white; font-weight: bold ">affiliate-experts </h1>



</div>



  </div>

</template>

<script>

const inputs = ['primary', 'secondary'];


export default {
  name: "AddProfile",

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


}



</script>

<style scoped>



.b-title {
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