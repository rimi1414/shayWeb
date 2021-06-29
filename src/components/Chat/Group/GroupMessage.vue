<!--todo: change this component name to GroupList in all necessary places.-->

<template>
  <q-card class="flex q-pa-md">
    <q-list class="full-width">

      <q-input flat bottom-slots v-model="text" label="Search for group" >
        <template v-slot:before>
          <q-btn v-go-back.single round dense flat icon="arrow_back_ios"/>
          <q-tooltip>Back</q-tooltip>
        </template>
        <template v-slot:append>
          <q-btn round dense flat icon="search"/>
          <q-tooltip>Search</q-tooltip>
        </template>
      </q-input>

      <q-item-label header class="q-mr-sm">A-z
      </q-item-label>
      <q-item
        v-for="group in groups"
        :key="group.name"
        class="q-mb-sm"
        :to="screenSize > 600 ? '/chat/'+ group.name : '/b/chat-page/' + group.name"
        clickable
        v-ripple>
        v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${group.avatar}`">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ group.name }}</q-item-label>
          <q-item-label caption lines="1">{{ 'last message' }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-badge color="red">
            99+
          </q-badge>
        </q-item-section>
      </q-item>

<!--      <<<<< create group>>>>>>-->
      <createGroup/>
      <!--      <<<<< create group>>>>>>-->

    </q-list>
  </q-card>
</template>

<script>

import {mapActions, mapGetters, mapState} from 'vuex'
import createGroup from "components/Chat/Group/CreateGroup";



export default {
  name: "GroupMessage",
  components: {createGroup},
  data() {
    return {
      screenSize: window.innerWidth,
    }
  },
  computed: {
  ...mapState('group', ['groups']),
  },
  methods: {
    ...mapActions('group', [ 'getMyGroup']),
  },
  created() {
    this.getMyGroup()
  }
}
</script>

<style scoped>

</style>
