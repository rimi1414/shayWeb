<template>
<q-page ref="pageChat" class="flex column">
  <br>
  <br>
  <q-banner  v-if="!othetUserDetails.online" class="text-center bg-grey-8 banner1">
    {{ othetUserDetails.name }} is offline

  </q-banner>
  <div class="q-pa-md column col justify-end justify-center">
    <q-chat-message
        v-for="(message, key) in messages"
        :key="key"
        :name="message.from == 'me' ? userDetails.name : othetUserDetails.name "
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
    />

  </div>
  <q-footer elevated>
    <q-toolbar>
      <q-from class="full-width" @submit="sendMessage">
      <q-input ref="newMessage" bg-color="white" v-model="newMessage" outlined rounded label="message" dense>
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
import localStorageDriver from '../Driver/Local-Storage'
import api from "@/Driver/api";
import firebaseDatabase from '../Driver/firebase/database';
import firebaseInstance from '../Driver/firebase';
import {mapActions, mapState} from  'vuex';



export default {
  data () {
    return{
      newMessage:'',


    }
  },
  computed :{...mapState('chat', ['messages', 'userDetails']),
    othetUserDetails(){
    return this.$store.state.chat.users[this.$route.params.otherUserId]
    }
  },


  methods:{
    ...mapActions('chat', ['firebaseGetMessages', 'firebaseStopGetMessages' ,'firebaseSendMessage']),
    sendMessage(){
      this.firebaseSendMessage({
        message:{
          text: this.newMessage,
          from: 'me'
        },
otherUserId: this.$route.params.otherUserId
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
    messages: function (val){
     if (Object.keys(val).length){
       this.scrollToBottom();
     }
    }
  },
  mounted() {

    this.firebaseGetMessages(this.$route.params.otherUserId)

  },
  destroyed() {
    this.firebaseStopGetMessages()
  }
}
</script>

<style scoped>
.banner1{

 margin-top: -10px;
  z-index: 2;
  opacity: 0.8;
}
</style>