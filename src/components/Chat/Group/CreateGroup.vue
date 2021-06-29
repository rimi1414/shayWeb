<template>

  <q-page-sticky :offset="[18, 18]">
    <q-btn fab icon="add" color="primary">
      <q-popup-proxy style=" margin-top: 50%; margin-left:70px; height: 500px">

        <q-card class="q-pa-md  items-start q-gutter-md" style="width:400px;">
          <q-item-lable>
            <q-btn text-color="primary" flat icon="group"/>
            <q-btn flat text-color="primary" style="margin-left: 57%" @click="group()">create</q-btn>
          </q-item-lable>
          <br>
          <q-input v-model="nameGroup" placeholder="name group" label="name of group:" style="margin-top: -1%"/>

          <q-toggle style="margin-left: 70%; margin-top: 10%" class="q-ma-xs" v-model="privateGroup"
                    label="private"/>
          <q-item-label class="q-ma-lg text-primary">add people</q-item-label>
          <q-separator class="bg-primary"/>
          <q-card style="margin-top: 20px">
            <q-item
              v-for="user in users"
              :key="user.id"
              @click="pushId(user.id)"
              :class="{'usersBackground':(idGroups.includes(user.id) === true)}"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="`https://cdn.quasar.dev/img/${user.avatar}`">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ user.name }}</q-item-label>
                <q-item-label caption lines="1">{{ 'last message' }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="red">
                  99+
                </q-badge>
              </q-item-section>
            </q-item>
          </q-card>
        </q-card>
      </q-popup-proxy>
    </q-btn>
  </q-page-sticky>

</template>

<script>

import {mapActions, mapState, mapGetters} from 'vuex'

export default {
  name: "messageMenu",
  props: ['position', 'dialog'],
  data() {
    return {
      idGroups: [],
      nameGroup: '',
      privateGroup: false,
      text: '',
    }
  },
  computed: {
    ...mapState('group', ['members']),
    ...mapState('auth', ['user', 'userId']),
    ...mapGetters('users', ['users']),
  },
  methods: {

    ...mapActions('group', ['createGroup', 'getThisGroup']),
    ...mapActions('users', ['getUsers']),

    pushId(id) {
      if (this.idGroups.length === 0) {
        this.idGroups.push(id)
      } else {
        for (let key in this.idGroups) {
          if (this.idGroups.includes(id)) {
            if (this.idGroups[key] === id) {
              this.idGroups.splice(key, 1)
            }
          } else {
            this.idGroups.push(id)
          }
        }
      }
    },
    group() {
      this.createGroup({id: this.idGroups, name: this.nameGroup})
      this.$router.push('/chat/' + this.nameGroup)
    },
  },
  created() {
    this.getUsers()
  }
}
</script>

<style>

.usersBackground {
  background-color: #d4a422;
}
</style>
