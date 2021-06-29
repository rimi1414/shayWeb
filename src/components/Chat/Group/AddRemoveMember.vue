<template>
  <q-card>
    <q-card class="q-pa-md items-start q-gutter-md" style="width:400px;">
      <q-item-lable>
        <q-btn text-color="primary" flat icon="group"/>
        <q-btn flat text-color="primary" @click="addOrRemove = true ; remove =false; addId= []">add people</q-btn>
        <q-btn flat text-color="primary" @click="remove =true; addOrRemove = false; addId= []">remove people</q-btn>
      </q-item-lable>
    </q-card>

    <q-card class="q-pa-md  items-start q-gutter-md" style="width:400px;">
      <q-item-lable>

        <q-btn text-color="primary" style="margin-left: 20%" icon="person_add" label="click to add"
               v-if="addOrRemove === true" @click="addRemoveMembers(userMembers, true)">
        </q-btn>
        <q-btn text-color="primary" style="margin-left: 20%" icon="person_remove" label="click to delete"
               v-if="remove === true"
               @click="addRemoveMembers(userNotMembers, false)">
        </q-btn>
      </q-item-lable>
      <q-item-label class="q-ma-lg text-primary" v-if="addOrRemove === true">add people</q-item-label>
      <q-item-label class="q-ma-lg text-primary" v-if="remove === true">remove people</q-item-label>
      <q-separator class="bg-primary"/>
      <q-card style="margin-top: 20px">
        <q-item v-if="remove === true"
                v-for="userMember in userMembers"
                :key="userMember.id"
                @click="pushId(userMember.id)"
                :class="{'userMembers':(addId.includes(userMember.id) === true)}"
                clickable
                v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/${userMember.avatar}`">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ userMember.name }}</q-item-label>
          </q-item-section>

        </q-item>

        <q-item v-if="addOrRemove === true"
                v-for="userNotMember in userNotMembers"
                :key="userNotMember.id"
                :class="{'userMembers':(addId.includes(userNotMember.id) === true)}"
                @click="pushId(userNotMember.id)"
                clickable
                v-ripple>

          <!--          todo: fix the picture-->

          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/${userNotMember.avatar}`">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ userNotMember.name }}</q-item-label>
          </q-item-section>

        </q-item>
      </q-card>
    </q-card>
  </q-card>


</template>

<script>

import {mapActions, mapState, mapGetters} from 'vuex'

export default {
  name: "messageMenu",
  data() {
    return {
      userNotMembers: [],
      userMembers: [],
      addOrRemove: false,
      remove: false,
      addId: [],
      thisMember:'',
    }
  },
  computed: {
    ...mapState('group', ['members']),
    ...mapState('auth', ['user', 'userId']),
    ...mapGetters('users', ['users']),
  },
  methods: {
    ...mapActions('group', ['getThisMembers', 'addMembersToFirestore', 'removeMembersToFirestore']),

    //todo: check if ID is an array of id's or one id
    pushId(id) {
      if (this.addId.length === 0) {
        this.addId.push(id)
      } else {
        for (let key in this.addId) {
          if (this.addId.includes(id)) {
            if (this.addId[key] === id) {
              this.addId.splice(key, 1)
            }
          } else {
            this.addId.push(id)
          }
        }
      }
    },

    addRemoveMembers(otherMember, bool) {
      if (bool === true){
        this.thisMember = this.userNotMembers
      } else {
        this.thisMember = this.userMembers
      }
      let j = 0  // j is for keep order in loop
      for (let i = 0; i + j < this.thisMember.length; i + j) {
        if (this.addId.includes(this.thisMember[i + j].id)) {
          this.thisMember.splice(i + j, 1)
          j = 0
        } else {
          j++
        }
      }
      for (let key in this.addId) {
        otherMember.push(this.users[this.addId[key]])
      }
      if(bool === true){
        this.addMembersToFirestore({members: this.addId, id: this.$route.params.id}).then(() => {
          this.addId = null
          this.userMembers = otherMember
        })
      } else {
        this.removeMembersToFirestore({members: this.addId, id: this.$route.params.id}).then(() => {
          this.addId = null
          this.userNotMembers = otherMember
        })
      }
    },

    sortGroupMembers() {
      for (const id in this.users) {
        if (this.members[this.$route.params.id].includes(id) === false) {
          this.userNotMembers.push(this.users[id])
        } else {
          this.userMembers.push(this.users[id])
        }
      }
    },

  },
  created() {
    this.getThisMembers({users: this.users, id: this.$route.params.id, myUser: this.user}).then(() => {
      this.sortGroupMembers()
    })
  }
}
</script>

<style>

.userMembers {
  background-color: #d4a422;
}

</style>
