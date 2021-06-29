
<template>
  <q-card flat class="no-padding no-margin row">

      <q-card :class="menuClass">
        <ChatMenu :screenSize="screenSize"/>
      </q-card>

    <q-card :class="chatClass">
      <ChatPage v-if="screenSize === 'large'" :screenSize="screenSize"/>
    </q-card>

  </q-card>
</template>

<script>

import ChatMenu from "../components/Chat/ChatMenu";
import ChatPage from "../components/Chat/ChatPage"

export default {

  name: "Chat1",
  components: {ChatMenu, ChatPage},
  data() {
    return {
      screenSize: '',
      menuClass: '',
      chatClass: '',
    }
  },
  mounted() {
    window.addEventListener('resize', () =>{
      this.screenSizeCheck()
    })
  },

  methods: {
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
    this.screenSizeCheck()
  },
}

</script>

<style lang="sass" scoped>

.desktopMenu
  width: 100%
  max-width: 30%
  right: 70%
  position: absolute

.desktopChat
  width: 100%
  max-width: 70%
  left: 30%
  position: absolute

.mobileMenu
  width: 100%

</style>
