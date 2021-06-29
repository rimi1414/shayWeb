<template>
  <q-page
    ref="pageLength"
    :class="{'invisible' : !showMessages}">
    <br>
    <br>
    <q-scroll-area
      ref="scrollArea"
      :thumb-style="thumbStyle"
      class="a-scroll q-pa-md">
      <q-chat-message
        class="q-pa-xs"
        v-for="(message, key) in messages"
        :key="key"
        :name="message.from === user.name ? 'me' : `${message.from}`"
        :stamp="message.time"
        :text="textMessage(message.replay, message.text)"
        :sent="message.from === user.name"
        @dblclick="updateLocalData(message.creationTime, message.id, message.time, message.text, message.imageId, message.from) ">
        <!--        todo: לבדוק למה הדיאלוג נפתח בלי סוף-->
        <img v-if="message.url" height="210" width="300" :src="message.url">
        <q-icon v-if="message.replay != null" name="reply" color="primary"/>
        <q-card class="bg-grey-4 shadow-10" v-if="message.replay != null">
          <span class="text-weight-bold"> reply to: {{ message.toReplay }}</span>
          <div v-for="line in message.text">
            <p> {{ line }} </p>
          </div>
          <p class="bg-grey-4"><br>{{ message.replay }}</p>
        </q-card>
        <q-card flat
                :class="message.from === user.name ? 'bg-grey-4' : 'bg-green-4' "
                class="no-padding"
                v-if="message.text.length > 1 && message.replay ==null">
          <div v-for="line in message.text">
            <p> {{ line }} </p>
          </div>
        </q-card>
      </q-chat-message>
    </q-scroll-area>
<!--    <dialogMessage :confirm="confirm" :obj="obj"/>-->
  </q-page>
</template>

<script>

import {mapActions, mapState, mapMutations} from 'vuex'
// import dialogMessage from "../components/Chat/dialogMessage";

export default {
  name: "ChatPage",
  // components: {dialogMessage},
  data() {
    return {
      newMessage:'',
      obj: {
        tempId: null,
        messageId: '',
        messageTime: '',
        messageFrom: '',
        messageText: '',
        imageId: null,
      },
      showMessages: false,
      messages: '',
      newReplay: null,
      replay: false,
      confirm: false,
      imgUrl: null,

      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#d4a422',
        width: '5px',
        opacity: 0.75
      },
    }
  },

  // todo: chack witch state functions is relevant
  computed : {
    ...mapState('chat', ['messages']),
    ...mapState('logUser', ['userDetails']),
    othetUserDetails() {
      return this.$store.state.logUser.users[this.$route.params.otherUserId]
    }
  }
  // computed: {
  //   ...mapState('chat', ['messagesById', 'chatId']),
  //   ...mapState('group', ['messagesByIds', 'groups', 'thisGroup']),
  //   ...mapState('auth', ['user', 'userId']),
  // },
  //
  // methods: {
  //   ...mapActions('group', ['getRealtimeMessagesGroup', 'sendGroupMessage', 'dellGroupMessage', 'getThisGroup']),
  //   ...mapActions('chat', ['sendNewMessage', 'getRealtimeMessages', 'dellMessage', 'loadMoreMessagesAction', 'checkPath']),
  //   ...mapActions('users', ['getUsers']),
  //   ...mapMutations('chat', ['setOtherId', 'resetMessage']),
  //
  //   textMessage(replay, text) {
  //     if (replay == null) {
  //       if (text.length == 1) {
  //         return [text]
  //       } else {
  //         return []
  //       }
  //     } else {
  //       return []
  //     }
  //   },
  //
  //   updateLocalData(tempId, id, time, text, imgId, from) {
  //     this.obj =
  //       {
  //         tempId: tempId,
  //         messageId: id,
  //         messageFrom: from,
  //         messageText: text,
  //         messageTime: time,
  //         imageId: imgId
  //       }
  //     this.confirm = true
  //   },
  //
  //   // todo: right now it scrolls to the bottom depends on the
  //   // amount of messages multiply by 100px for each msg, need to change that it'll scroll depends
  //   // on the total page length
  //
  //   scroll() {
  //     setTimeout(() => {
  //       this.$refs.scrollArea.setScrollPosition(this.messages.length * 100)
  //     }, 20);
  //   },
  //
  //   updateLocalMessages() {
  //     this.getUsers().then(() => {
  //       if (this.thisGroup === this.$route.params.id) {
  //         this.getRealtimeMessagesGroup({id: this.userId, otherId: this.$route.params.id})
  //         this.messages = this.messagesByIds
  //       } else {
  //         this.checkPath().then(() => {
  //           this.getRealtimeMessages()
  //         })
  //         this.messages = this.messagesById
  //       }
  //     })
  //   }
  // },
  //
  // mounted() {
  //   this.updateLocalMessages()
  // },
  //
  // created() {
  //   this.getThisGroup(this.$route.params.id)
  // },
  //
  // watch: {
  //   '$route'() {
  //     this.updateLocalMessages()
  //   },
  //   messagesById() {
  //     this.messages = this.messagesById
  //   },
  //   messagesByIds() {
  //     this.messages = this.messagesByIds
  //   },
  //   messages: function (val) {
  //     if (Object.keys(val).length) {
  //       this.scroll()
  //       setTimeout(() => {
  //         this.showMessages = true
  //       }, 200)
  //     }
  //   },
  // },
  //
  // destroyed() {
  //   const reset = null
  //   this.resetMessage(reset)
  // }
}
</script>

<style lang="sass" scoped>

.a-scroll
  height: 93%
  max-height: 100%
  max-width: 100%

</style>

