<template>
  <div >


    <div class="q-pa-md locaite">
      <q-carousel class="raduse"
          animated
          v-model="slide"
          arrows
          navigation
          infinite
      >
        <q-carousel-slide class="my-card"    :name="1" :img-src="this.profile.pic"/>
        <q-carousel-slide :name="2" :img-src="this.profile.image" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {


  name: "carousel",
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
.locaite {
 /*margin-top: 20%;*/
}
.raduse{
  border-radius: 30%;
  width: 50%  ;
}
.my-card{
  /*height:100%;*/
  width:70%;

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
  -moz-opacity: 0.6;
  opacity: 0.6;
  position: absolute;
  top: 0;
right: 25px;
  height: 20%;
  width: 100%;
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

</style>
