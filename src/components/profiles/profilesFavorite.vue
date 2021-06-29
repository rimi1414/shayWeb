<template>
  <div class="btn-favorite">
    <q-rating @click="lev(profileId)"
              v-model="cc"
              max="1"
              size="3em"
              color="red"
              color-selected="red-9"
              icon="favorite_border"
              icon-selected="favorite"
              icon-half="favorite"
              no-dimming
    />
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "profilesFavorite",

  data() {
    return {
      cc: 0,
      profileId: null,
      me:null,
    }
  },
  computed: {...mapState('profiles', [ 'isLove']),},
  methods:{
    ...mapActions('profiles', [ 'postLevProfile', 'getLove', 'deleteThisLove']),
    lev(id) {
      if (this.cc === 1 ) {
        this.postLevProfile(id)
      } else {
        this.deleteThisLove(this.$route.params.id)
      }
    },
  },
  created() {
    this.getLove(this.$route.params.id).then(()=>{
      this.cc = this.isLove
    })
    // this.getProfileLove()
    // this.me = `${window.user.uid}`;
    this.profileId = this.$route.params.id
  }
}
</script>

<style scoped>

</style>