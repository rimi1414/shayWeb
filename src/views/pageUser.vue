<!--todo: redesign menu: which search buttons should we keep and which ones we can pass-->

<template>

<div>

  <q-card flat class="no-padding no-margin row" >



    <q-card :class="menuClass">
      <ChatMenu :screenSize="screenSize"/>
    </q-card>

    <q-card :class="chatClass">
      <pageChat v-if="screenSize === 'large'" :screenSize="screenSize"/>
    </q-card>

  </q-card>
</div>

<!--  <div class="contain">-->





<!--    <ChatMenu/>-->

<!--    <pageChat/>-->



<!--    <br>-->
<!--    <br>-->
<!--    <br>-->
<!--    <q-list  >-->
<!--&lt;!&ndash;        <q-item&ndash;&gt;-->

<!--&lt;!&ndash;            class="bg-grey-9 text-white shadow-2 rounded-borders"&ndash;&gt;-->
<!--&lt;!&ndash;            v-for="(user, key) in users" :key="key"&ndash;&gt;-->
<!--&lt;!&ndash;            :to="'/chat/'+ key"&ndash;&gt;-->
<!--&lt;!&ndash;            v-if="user.name"&ndash;&gt;-->
<!--&lt;!&ndash;            clickable&ndash;&gt;-->
<!--&lt;!&ndash;            v-ripple>&ndash;&gt;-->
<!--&lt;!&ndash;          <q-item-section avatar>&ndash;&gt;-->

<!--&lt;!&ndash;            <q-avatar class="a-avatar" v-if="!user.img">&ndash;&gt;-->
<!--&lt;!&ndash;              <img :src=user.pic>&ndash;&gt;-->
<!--&lt;!&ndash;            </q-avatar>&ndash;&gt;-->

<!--&lt;!&ndash;          </q-item-section>&ndash;&gt;-->

<!--&lt;!&ndash;          <q-item-section>&ndash;&gt;-->
<!--&lt;!&ndash;            <q-item-label style=" margin-right: 2%">{{ user.name }}</q-item-label>&ndash;&gt;-->
<!--&lt;!&ndash;            <q-item-label caption lines="1">{{ last[user.id] }}</q-item-label>&ndash;&gt;-->
<!--&lt;!&ndash;          </q-item-section>&ndash;&gt;-->

<!--&lt;!&ndash;          <q-item-section side>&ndash;&gt;-->
<!--&lt;!&ndash;            <q-badge&ndash;&gt;-->
<!--&lt;!&ndash;                :color="user.online  ? 'light-green-5' : 'grey-4'">&ndash;&gt;-->
<!--&lt;!&ndash;            </q-badge>&ndash;&gt;-->
<!--&lt;!&ndash;          </q-item-section>&ndash;&gt;-->
<!--&lt;!&ndash;        </q-item>&ndash;&gt;-->
<!--    </q-list>-->
<!--  </div>-->
</template>

<script>

// todo: check this getters
import {mapActions, mapGetters, mapState} from 'vuex'

import ChatMenu from "../components/Chat/ChatMenu";
import pageChat from "../components/Chat/pageChat"

export default {
  name: "pageUser",
  components: {ChatMenu, pageChat},
  // data() {
  //   return {
  //     screenSize : window.innerWidth,
  //     text: '',
  //     last: {},
  //     dense: false,
  //
  //     thumbStyle: {
  //       right: '4px',
  //       borderRadius: '5px',
  //       backgroundColor: '#d4a422',
  //       width: '5px',
  //       opacity: 0.75
  //     },
  //   }
  // },
  data() {
    return {
      screenSize: '',
      menuClass: '',
      chatClass: '',
    }
  },
  computed: {
    // todo: check this getters
    // ...mapGetters('users', ['users']),
    ...mapState('logUser', ['users']),
    // ...mapState('chat', ['users']),
    // ...mapState('group', ['groups']),
  },
  // methods: {
  //   // ...mapActions('users', ['getUsers']),
  //   ...mapActions('logUser', ['firebaseGetUser' ]),
  //   ...mapActions('chat', ['getProfileMessages']),
  //
  //
  // },
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


  // created() {
  //
  //   this.firebaseGetUser().then(()=>{
  //     console.log(this.users)
  //     console.log(this.users)
  //     console.log(this.users)
  //     this.getProfileMessages(this.users)
  //   })
  //
  //
  // }
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
