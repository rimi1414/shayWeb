
<template>
  <div class="q-pa-md row aaa pic1">
    <!--    <q-carousel class="qqq"-->
    <!--        v-for="profile of profiles"-->
    <!--        animated-->
    <!--        v-model="slide"-->
    <!--        thumbnails-->
    <!--        infinite-->
    <!--    >-->
    <!--      <q-carousel-slide @click="gomyprofile1(id)" :name="1" :img-src="profile.pic" class="asa" />-->
    <!--      <q-carousel-slide :name="1" :img-src="profile.image" class="asb"/>-->

    <!--    </q-carousel>-->
    <!--    <q-input borderless dense debounce="300" style="background-color:gray; margin-right: 65%" v-model="serchByName" placeholder="חיפוש">-->
    <!--      <template v-slot:append>-->

    <!--        <q-btn class="del222" @click="remove(props.row.id)"><q-icon name="search"/></q-btn>-->

    <!--      </template>-->
    <!--    </q-input>-->
    <q-card class="my-card q-ma-sm" v-for="profile of [profile]" >
      <q-carousel
          class="my-card"
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
      >

        <q-carousel-slide   class="my-card" @click="gomyprofile1(profile.id)"  :name="2" :img-src="profile.pic">

          <div class="container">
            <div class="block"></div>
            <div class="text">גיל: {{profile.date}}</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="1" :img-src="profile.image" >
          <div class="container">
            <div class="block"></div>
            <div class="text"> {{profile.name}}</div>
          </div>

        </q-carousel-slide>
      </q-carousel>


    </q-card>

  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {


  name: "carusel",
  data:() => ({
    slides: [],
    model3: 4.5,
    slide: 1,
    localProfile : null
  }),
  computed: mapState('profiles', ['editedProfileId', 'profiles', 'profileId', 'profile']),


  methods: {
    ...mapMutations('profiles', ['setProfileId','resetProfileId']),
    gomyprofile1(id){
      this.setProfileId(id)
      // this.$router.push({name: 'profile', params:`${props.row.id}`});
      this.$router.push(`/profile/${id}`);

    },
  },
  created() {

  },
  destroyed() {
    this.resetProfileId;
  }


}
</script>

<style scoped>
.aaa {
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
.qqq{
  height: 90px;
  width: 10%;
  border-radius: 50%;
}
.my-card{

  height:400px;
  width:400px;
  border-radius: 90px;

}
.lev{

}
.container {
  position: relative;
  width: 300px;
  height: 200px;
  margin-top: 75%;

}
.block {
  background: gray;
  filter: alpha(opacity=60);
  /* IE */
  -moz-opacity: 0.6;
  /* Mozilla */
  opacity: 0.6;
  /* CSS3 */
  position: absolute;
  top: 0;
right: 25px;
  height: 20%;
  width: 100%;
  /*margin-left: 50%;*/
  /*margin-top: 10%;*/
}
.text {
  font-weight: bold;
  font-size: 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-right: 50%;
  margin-top: 30px;
  position: relative;
}

/*.pic1{*/
/*  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/Pxee9npeg3XjuYJ8GMuuSTL6RJC3%2Fprofile%2Fmountains.jpg?alt=media&token=7f29dc30-63eb-433d-bf68-707ac8a2af89");*/
/*  background-size:100%;*/

/*  backdrop-filter: blur(8px);*/

/*}*/
/*.pic{*/
/*  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/iUgJMzIl9QRRYez0cDeNRN0IR9N2%2Fimages%2Fmountains.jpg?alt=media&token=0801d8f4-efb7-4e46-876d-143a4389a8a6");*/
/*  background-size:100%;*/
/*  backdrop-filter: blur(8px);*/

/*}*/
</style>
