<template>

<q-page ref="pageChat" class="flex column" >

  <br>
  <br>
<!--  <q-banner  v-if="!othetUserDetails.online" class="text-center bg-grey-8 banner1">-->
<!--    {{ othetUserDetails.name }} is offline-->


<!--  </q-banner>-->
  <div class="q-pa-md column col justify-end justify-center">

    <q-chat-message
        v-for="(message, key) in messages"
        :key="key"
        :name="message.from == 'me' ? userDetails.name : othetUserDetails.name "
        :text="[message.text]"
        :sent="message.from == 'me' ? false : true"
    />

  </div>

  <q-footer elevated :style="this.screenSize >600 ? 'width: 40%; margin-left: 43%; backgroundColor: #d4a422 ': 'width: 100%;  backgroundColor: #d4a422'">
    <q-toolbar>
      <q-from class="full-width"  @submit="sendMessage">
      <q-input ref="newMessage" bg-color="white" v-model="newMessage" outlined rounded label="your message" dense>
        <template v-slot:after>
          <q-btn @click="sendMessage" type="submit" round dense flat icon="send" color="white"/>
        </template>
      </q-input>
      </q-from>
    </q-toolbar>
  </q-footer>
</q-page>




</template>

<script>

import {mapActions, mapState} from  'vuex';


export default {
  data () {
    return{
      thumbStyle: {
        // right: '4px',
        // borderRadius: '5px',
        // backgroundColor: '#d4a422',
        // width: '5px',
        // opacity: 0.75
      },
      newMessage:'',
      screenSize:window.innerWidth,
    }
  },
  computed :{...mapState('chat', ['messages']),
...mapState('logUser', ['userDetails']),
    othetUserDetails(){
    return this.$store.state.logUser.users[this.$route.params.otherUserId]
    }
  },


  methods:{
    ...mapActions('chat', ['firebaseGetMessages', 'firebaseStopGetMessages' ,'SendMessage','firebaseCleanMessages']),
    sendMessage(){
      this.SendMessage({
        message:{
          text: this.newMessage,
          from: 'me'
        },
otherUserId: this.$route.params.id
      })
      this.clearMesage();
    },
    clearMesage(){
      this.newMessage = '';
      this.$refs.newMessage.focus()
    },
    scrollToBottom(){
let pageChat = this.$refs.pageChat.$el
      setTimeout(() =>{
        window.scrollTo(0, pageChat.scrollHeight)
      } , 20);
    }
  },
  watch: {
    '$route'(){
      this.firebaseCleanMessages().then(()=>{
        this.firebaseGetMessages(this.$route.params.id)
      })

    },
    messages: function (val){
     if (Object.keys(val).length){
       this.scrollToBottom();
     }
    }
  },
  mounted() {

    this.firebaseGetMessages(this.$route.params.id)

  },
  created() {

    // this.firebaseGetMessages(this.$route.params.id)
    // console.log(this.othetUserDetails.name)
    // console.log(this.userDetails)
  },

  destroyed() {
    this.firebaseStopGetMessages()
  }
}
</script>

<style lang="sass" scoped>

.a-scroll
  height: 93%
  max-height: 100%
  max-width: 100%


</style>