<template>

  <div class="sett" style="z-index: 2" v-if="(this.$route.params.id === me)" >
                <div class="q-pa-md"  >
                  <q-btn class="glossy" color="gray" icon="settings" >
                    <q-menu :content-style="{ backgroundColor: '#eee', color: 'blue'}">
                      <div class="row no-wrap q-pa-md bg-grey-5">
                        <div class="column ">
                          <div class="text-h6 q-mb-md">Settings</div>
                          <q-list style="min-width: 100px">
                            <q-item clickable>
                              <q-item-section @click="updateProfile">עריכת פרופיל</q-item-section>
                            </q-item>
                            <q-item clickable>
                              <q-item-section>עריכת תמונות</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable>
                              <q-item-section @click="goToFavorite">פייבוריטים</q-item-section>
                            </q-item>
                          </q-list>
                        </div>
                        <q-separator vertical inset class="q-mx-lg" />
                        <div class="column items-center">
                          <q-avatar size="72px">
                            <img :src="profile.pic">
                          </q-avatar>

                          <div class="text-subtitle1 q-mt-md q-mb-xs">{{profile.name}}</div>

                          <q-btn
                              color="primary"
                              label="Logout"
                              push
                              size="sm"
                              v-close-popup
                          />
                        </div>
                      </div>
                    </q-menu>
                  </q-btn>
                </div>
              </div>

</template>

<script>
export default {
  props: [ 'profile' ],
name: "setting",
  data() {
    return {
      me: null,
    }
  },

  methods:{
    updateProfile(){
      this.$emit('update')
    },
    goToFavorite(){
      this.$router.push(`/favorite`)
    },
  },
  created() {
    this.me = `${window.user.uid}`;
  }
}
</script>

<style >
.sett{
  color: #21BA45;
z-index:2 ;
  /*margin-top: -7%;*/

}
</style>