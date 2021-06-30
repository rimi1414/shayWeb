<template >
  <div class="picAddMobile" style="height: 1000px; background-color: black" >

    <div  :class="screenSize < 600 ? 'q-pa-sm  items-start q-gutter-md' : 'contain q-pa-sm  items-start q-gutter-md'" >
      <q-card dark bordered class="backBlack"  >

<!--        header-->
        <profilesHeader class="head" />
        <!--        header-->

        <q-separator dark  style=" background-color: darkred"/>
        <q-card-section>

<!--          carusel-->
          <carusel />
          <!--          carusel-->


          <template>
            <div class="q-pa-lg flex flex-center">
              <q-pagination
                  v-model="current"
                  :max="5"
              >
              </q-pagination>
            </div>
          </template>
        </q-card-section>
      </q-card>







    </div>

  </div>

</template>

<script>
import profilesHeader from "@/components/profiles/profilesHeader";
import {mapState} from "vuex";
import carusel from "@/components/profiles/carusel";

export default {


  name: "profiles",
  components: {
     carusel, profilesHeader
  },
  data() {
    return {
      screenSize : window.innerWidth,
      current: 1,
      searchByName:null,
      slide: 1,



    }
  },

  computed: {...mapState('profiles', ['editedProfileId', 'profiles', 'profile' , 'model3']),
    ...mapState('chat', ['users' ,'userDetails'])},

  // todo:router gard:
  created() {
    if (!window.user){
      this.$router.push('/login')
  }



},

  // todo: fix this:
  // watch:{
  //   current(){
  //     if(this.current){
  //       this.getProfiles(this.current)
  //     }
  //   }
  // }

}
</script>

<style >
.contain{
  max-width: 1100px;
  margin: auto;
}

.picAddMobile{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/%D7%9C%D7%91%D7%91%D7%95%D7%AA.png?alt=media&token=6e0a5c80-b1e7-47cc-aa77-40c897743512");
  background-repeat: no-repeat;
  background-size: 100%;
background-position-y: 20% ;
}
.search {
  color: #1D1D1D;
  background-color: darkred;
  margin-right: 10%;
}
.backBlack{
  background-color: rgba(0,0,0, 0.7); /* Black w/opacity/see-through */
}

.a-title {
  height: 1%;
  color: aliceblue;
  font-family: "Guttman Kav";
  width: 64%;
  padding: 3%
}
@media screen and (max-width:600px) {
  .a-title{
    font-size: 30px;
    padding-top: 7%;
    padding-bottom: 7%;
    width: 150%;
  }
.head{
  margin-top: 15%;
}
}
</style>