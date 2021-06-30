<template>
  <div class="picAddMobile" >

    <div  :class="screenSize < 600 ? 'q-pa-sm  items-start q-gutter-md' : 'contain q-pa-sm  items-start q-gutter-md'" >
      <q-card dark bordered class="backBlack">
        <q-card-section>
          <q-card class="text-h4  backBlack  a-title">הפייבוריטים שלי</q-card>

          <div  style=" ;   position: absolute ">
            <q-rating
                      v-model="isLove"
                      max="6"
                      size="3em"
                      color="red"
                      color-selected="red-9"
                      icon="favorite_border"
                      icon-selected="favorite"
                      icon-half="favorite"
                      no-dimming
            />
          </div>
        </q-card-section>
        <q-separator dark  style=" background-color: darkred"/>
        <q-card-section>

          <carousel @noFavorite="noHaveFavorite"/>
          <q-card v-if="noFavorite === false  " class="backNone">
            <p>
              אוי! אין לך עדיין פייבוריטים... זה הזמן לאסוף כמה:
            </p>
            <p>
              תחזור לפרופילים ותתחיל לאסוף.. בקרוב אם יהיה מאץ תוכל לראות בעמוד אשר בבניה
            </p>
          </q-card>
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
      <br>      <br>      <br>      <br>      <br>


    </div>

  </div>

</template>

<script>

import {mapState} from "vuex";
import carousel from "@/components/profiles/carousel";

export default {


  name: "profiles",
  components: {
    carousel
  },
  data() {
    return {
      noFavorite:true,
      screenSize : window.innerWidth,
      isLove:6,
    }
  },

  computed: {...mapState('profiles', [ 'profiles', 'profile' ]),
   },
methods:{
  noHaveFavorite(){
      this.noFavorite = false
    }
},
  // todo:router gard:
  created() {
    if (!window.user){
      this.$router.push('/login')
  }



},

}
</script>

<style >
.contain{
  max-width: 1100px;
  margin: auto;
}

.backNone{
  background-color: rgba(0,0,0, 0);
}
.picAddMobile{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tonda-datind.appspot.com/o/%D7%9C%D7%91%D7%91%D7%95%D7%AA.png?alt=media&token=6e0a5c80-b1e7-47cc-aa77-40c897743512");
  background-repeat: no-repeat;
  background-size: 100%;
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
</style>