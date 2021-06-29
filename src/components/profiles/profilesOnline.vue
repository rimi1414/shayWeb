<template>
    <q-card class="backBlack">
  <q-item style="max-width: 80px" v-for="(user, key) in users" :key="key"
          :to="'/chat/'+ key"
          v-if="$route.params.id === key"
          clickable v-ripple>

    <q-item-section side style="max-width: 50px" >
      <q-badge style="max-width: 50px"
               :color="user.online ? 'light-green-6' : 'grey-8'">
        {{ user.online ? 'online' :'offline' }}
      </q-badge>
    </q-item-section>
  </q-item>
    </q-card>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "profilesOnline",
  computed: {  ...mapState('logUser', ['users' ,'userDetails'])},

}
</script>

<style >

.backBlack{
  background-color: rgba(0,0,0, 0.1); /* Black w/opacity/see-through */
}
</style>