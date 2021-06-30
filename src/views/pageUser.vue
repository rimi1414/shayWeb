

<template>

<div style="margin-left: 20%">

  <q-card flat class="no-padding no-margin row" >



    <q-card :class="menuClass">
      <ChatMenu :screenSize="screenSize"/>
    </q-card>

    <q-card :class="chatClass">
      <pageChat v-if="screenSize === 'large'" :screenSize="screenSize"/>
    </q-card>

  </q-card>
</div>

</template>

<script>

// todo: check this getters
import {mapActions, mapGetters, mapState} from 'vuex'

import ChatMenu from "../components/Chat/ChatMenu";
import pageChat from "../components/Chat/pageChat"

export default {
  name: "pageUser",
  components: {ChatMenu, pageChat},

  data() {
    return {
      screenSize: '',
      menuClass: '',
      chatClass: '',
    }
  },
  computed: {

    ...mapState('logUser', ['users']),

  },

  methods: {
      ...mapActions('logUser', ['firebaseGetUser' ]),
    screenSizeCheck() {
      if (window.innerWidth < 600) {
        this.screenSize = 'small'
        this.menuClass = 'mobileMenu small-screen-only'
      } else {
        this.screenSize = 'large'
        this.menuClass = 'desktopMenu large-screen-only'
        this.chatClass = 'desktopChat large-screen-only'
      }
    }
  },
  created() {
    console.log(window.user.uid)

    this.screenSizeCheck()
    this.firebaseGetUser().then(()=>{
          console.log(this.users)
          console.log(this.users)
          console.log(this.users)
          this.getProfileMessages(this.users)
        })
  },



}

</script>

<style lang="sass" scoped>
.xxx
  overflow-y: hidden
.desktopMenu
  width: 80%
  max-width: 30%
  right: 70%
  position: absolute

.desktopChat
  height: 100vh
  width: 50%
  max-width: 70%
  left: 30%
  position: absolute

.mobileMenu
  width: 100%

.chosenChat
  background: #ffd77d
  color: #000000

.a-avatar
  background: #d4a422
  color: #ffffff

.b-scroll
  height: 89vh
  max-width: 100%



.contain
  max-width: 975px
  margin: auto

</style>
