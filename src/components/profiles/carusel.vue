<template>

  <div>

    <q-input borderless dense debounce="300" class="search bg-grey-8"
             v-model="searchByName" placeholder="חיפוש על פי שם ">

    </q-input>

      <div class="locateCarousel row">
        <q-card  v-for="(profile, index) of profilesCarousel" :class="screenSize > 600 ? 'q-ma-sm backNone' : 'q-ml-md q-mt-md q-mb-md backNone'" >
          <q-card class="backNone" style="position: sticky" >
            <p  v-if="profile.name" class="profName" >{{profile.name}}</p>
            <p v-else class="profName" >no name</p>
          </q-card>
          <q-carousel class="sizeCarousel backNone "
                      swipeable
                      animated
                      v-model="slide[index]"
                      :thumbnails="screenSize > 600"
                      infinite
          >
            <q-carousel-slide v-if="screenSize > 600" class="borderRadius" @click="goHisProfile(profile.id)" :name="1" :img-src="profile.image"></q-carousel-slide>
            <q-carousel-slide v-if="screenSize > 600" class="borderRadius" @click="goHisProfile(profile.id)" :name="2" :img-src="profile.pic" ></q-carousel-slide>
            <q-carousel-slide v-if="screenSize < 600"  class="borderRadius"  :name="1" :img-src="bool[index] === true ? profile.pic : profile.image" @click="goHisProfile(profile.id)"></q-carousel-slide>
          </q-carousel>
          <q-btn v-if="screenSize < 600" class="west-btn"  @click="nextPic(index)" icon="west"/>
        </q-card>
    </div>



  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState, mapActions} from 'vuex'

export default {

  name: "carusel",
  data:() => ({
    profilesCarousel :'',
    searchByName:'',
    bool: [],
    screenSize: window.innerWidth,
    slide: [],
    // currentPage:0, todo: this- page 1/2/3
  }),
  computed: {
    ...mapState('profiles', ['editedProfileId', 'profiles', 'profileId', 'profile']),
    // todo: this filter
    // filterProfiles: function (){
    //   console.log(this.searchByName)
    //   return this.profiles.filter((profile , key) =>{
    //     return profile.name.match(this.searchByName)
    //   })
    // }
  },


  methods: {
    ...mapMutations('profiles', ['setProfileId','resetProfileId']),
    ...mapActions('profiles', ['getProfiles', 'getOneProfile' , 'getMyProfile']),

    nextPic(index){
      this.bool[index] = !this.bool[index]
      this.getProfiles().then(()=>{
        this.profiles.forEach(pn=> this.bool.push(false))
      })
      this.profilesCarousel=this.profiles
    },

    goHisProfile(id){
      this.setProfileId(id)
      this.$router.push(`/profile/${id}`);
    },
  },

  created() {
    if(this.$route.fullPath.includes('/profiles')){
      this.getMyProfile().then(()=>{
        this.getProfiles().then(()=>{
          this.profiles.forEach(p=> this.slide.push(1))
          this.profilesCarousel=this.profiles

        })
      })
    }else {
      this.profilesCarousel=this.profiles
      if (this.profiles != null){
        this.profiles.forEach(p=> this.slide.push(1))
      }
      if(this.profiles.length === 0 || this.profiles === null){
        this.$emit('noFavorite')
      }
    }
  },
  watch: {
    searchByName() {
      this.profilesCarousel= this.profiles.filter(profile => profile.name.match (this.searchByName));
    },
  },


  destroyed() {
    // todo:chat if its needs
    this.resetProfileId;
  }


}
</script>

<style scoped>

.sizeCarousel{
  height: 200px;
  width: 200px;
}

.locateCarousel{
  padding: 2% 2% 2% 2%;
}


.borderRadius{
  background-color: rgba(0,0,0, 0.0);
  border-radius: 50%;
}

.profName{
  background-color: rgba(0,0,0, 0.6);
  text-align: center;
  border-radius: 30%;
  margin-bottom: 1px;
  margin-right: 15%;
  width: 70%;
}

.backNone{
  background-color: rgba(0,0,0, 0);
}
.search{
  position: absolute;
  margin-top: -6% ;
  background-color:gray;
  margin-right: 70%;
  width: 200px;
}

.west-btn{
  margin-right: 30%;
}


@media screen and (max-width:600px) {

.search{
  margin-top: -16%;
  margin-right: 55%;
  text-align: left;
width: 40%;
}
  .sizeCarousel{
    border-radius: 500px;
    height: 90px;
    width: 90px;
  }
  .locateCarousel{
    padding: 0%
  }

  }
</style>
