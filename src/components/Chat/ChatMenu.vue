<!--todo: redesign menu: which search buttons should we keep and which ones we can pass-->

<template dir="rtl">
  <div dir="rtl">
    <q-list>
      <q-input flat bottom-slots v-model="text" label="Jump to..." :dense="dense">
        <template v-slot:append>
          <q-btn round dense flat icon="search"/>
          <q-tooltip>Search</q-tooltip>
        </template>
      </q-input>


      <q-scroll-area
        :thumb-style="thumbStyle"
        class="b-scroll q-pa-md">
        <q-item-label header class="q-mr-sm">Groups

          <q-btn
            class="q-mr-sm"
            flat
            icon="search"
            round
            size="10px"
            to='/group-message'>
            <q-tooltip>Search group</q-tooltip>
          </q-btn>
        </q-item-label>

        <!--        todo: new component for groups-->
<!--        <q-item-->
<!--          :class="{'chosenChat':(group.name == $route.params.id)}"-->
<!--          v-for="group in groups"-->
<!--          :key="group.name"-->
<!--          :to="screenSize === 'large'? '/chat/'+ group.name : '/b/chat-page/' + group.name"-->
<!--          clickable-->
<!--          v-ripple>-->
<!--          <q-item-section avatar>-->
<!--            <q-avatar class="a-avatar">-->
<!--              <img :src="`https://cdn.quasar.dev/img/${group.avatar}`">-->
<!--            </q-avatar>-->
<!--          </q-item-section>-->

<!--          <q-item-section>-->
<!--            <q-item-label>{{ group.name }}</q-item-label>-->
<!--            <q-item-label caption lines="1">{{ 'last message' }}</q-item-label>-->
<!--          </q-item-section>-->

<!--          <q-item-section side>-->
<!--            <q-badge color="red">-->
<!--              99+-->
<!--              &lt;!&ndash;notification num&ndash;&gt;-->
<!--            </q-badge>-->
<!--          </q-item-section>-->
<!--        </q-item>-->

        <q-separator/>

        <q-item-label header class="q-mr-sm">Direct message
          <q-btn
            class="q-mr-sm"
            flat
            icon="search"
            round
            size="10px"
            to='/direct-message'>
            <q-tooltip>New message</q-tooltip>
          </q-btn>
        </q-item-label>

        <!--        todo: new component for direct messages -->
        <q-item dir="rtl"
          :class="{'chosenChat':(key == $route.params.id)}"
          v-for="(user,key) in users"
          :key="key"
          :to="screenSize === 'large' ? `/pageUser/`+ key : `/b/chat-page/`+ key"
          clickable
          v-ripple>
          <q-item-section avatar>

            <q-avatar class="a-avatar" v-if="!user.img">
<!--              {{ user.name.charAt(0) }}-->
            </q-avatar>
            <q-avatar class="a-avatar" v-if="user.img">
              <img :src=user.img>
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
            <q-item-label caption lines="1">{{ last[user.id] }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge
              :color="user.online  ? 'light-green-5' : 'grey-4'">
            </q-badge>
          </q-item-section>
        </q-item>
      </q-scroll-area>
    </q-list>
  </div>
</template>

<script>
//
//import {mapActions, mapGetters, mapState} from 'vuex'

import {mapActions, mapState} from "vuex";

export default {
  name: "ChatMenu",
  // props: ['screenSize'],
  data() {
    return {
      text: '',
      last: {},
      dense: false,
      screenSize:'large',
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#d4a422',
        width: '5px',
        opacity: 0.75
      },
    }
  },
  computed: {
    // todo: check this getters
    // ...mapGetters('users', ['users']),
    ...mapState('logUser', ['users']),
    // ...mapState('chat', ['users']),
    // ...mapState('group', ['groups']),
  },
  methods: {
    // ...mapActions('users', ['getUsers']),
    ...mapActions('logUser', ['firebaseGetUser' ]),
    ...mapActions('chat', ['getProfileMessages']),


  },
  // computed: {
  //   ...mapGetters('users', ['users']),
  //   ...mapState('chat', ['lastMessage']),
  //   ...mapState('group', ['groups']),
  // },
  // methods: {
  //   ...mapActions('users', ['getUsers']),
  //   ...mapActions('chat', ['getLastMessageAction']),
  //   ...mapActions('group', ['getMyGroup']),

//todo: check
//     async getThisLastMessage() {
//       for (let user in this.users) {
//         await this.getLastMessageAction(user)
//       }
//todo: change name to this.lastMessages
//       this.last = this.lastMessage
//     },
//   },

  // created() {
  //   this.getMyGroup()
  //   this.getUsers()
  //     .then(() => {
  //       this.getThisLastMessage()
  //     })
  // }
}

</script>

<style lang="sass" scoped>

.chosenChat
  background: #ffd77d
  color: #000000

.a-avatar
  background: #d4a422
  color: #ffffff

.b-scroll
  height: 89vh
  max-width: 100%

</style>
