<template>
    <div>
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-btn @click="replay = false" flat icon="cancel" color="primary" v-close-popup/>
            <q-card v-if="replay === true">
              {{ obj.messageText[0] }} :תוכן ההודעה
            </q-card>
          </q-card-section>
          <q-card-actions align="right">`
            <q-btn v-if="replay === false" flat icon="forward" color="primary" @click="replay = true"/>
            <q-form @submit="sendReply" v-if="replay === true">
              <q-input v-model="newReplay"
                       bg-color="white" outlined rounded label="Message" dense>
                <template v-slot:after>
                  <q-btn   @click="sendReply" v-close-popup round dense flat type="submit" color="primary"
                         icon="send"/>
                </template>
              </q-input>
            </q-form>
            <q-btn v-if=" obj.messageFrom === user.name && confirm === true && (now - obj.tempId || now- obj.messageId) < 600000" flat
                   icon="delete"
                   color="primary" v-close-popup @click="deleteMessage"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>


</template>

<script>

import {mapActions, mapState, mapMutations} from 'vuex'

export default {
  name: "ChatPage",
  props: ['confirm', 'obj'],
  data() {
    return {
      newReplay: null,
      replay: false,
      dialog: false,
      now: new Date().getTime(),
    }
  },

  computed: {
    ...mapState('chat', [ 'chatId']),
    ...mapState('group', [ 'groups', 'thisGroup']),
    ...mapState('auth', ['user', 'userId']),
  },

  methods: {
    ...mapActions('group', ['getRealtimeMessagesGroup', 'sendGroupMessage', 'dellGroupMessage']),
    ...mapActions('chat', ['sendNewMessage', 'getRealtimeMessages', 'dellMessage']),
    ...mapActions('images', ['deleteAction']),



// todo: this two functions below (sendReply && sendNewMessage) do the exact same action.
//   todo: make it more efficient and reuseable.
    sendReply() {
      this.confirm = false
      if (this.thisGroup === this.$route.params.id) {
        this.sendGroupMessage({
          newMessage: this.obj.messageText,
          url: null,
          replay: this.newReplay,
          toReplay: this.obj.messageFrom,
          imgId: null,
          id: this.$route.params.id,
          from: this.user.name
        }, this.$route.params.id).then(() => {
          this.newReplay = null

        })
      } else {
        this.sendNewMessage({
          newMessage: this.obj.messageText,
          url: null,
          replay: this.newReplay,
          toReplay: this.obj.messageFrom,
          imgId: null,
          id: this.$route.params.id,
          from: this.user.name
        }, this.$route.params.id).then(() => {
          this.newReplay = null
        })
      }
      this.clearField()
    },


    deleteImgFromStorage() {
      this.deleteAction({pathId: this.chatId, imgId: this.obj.imageId})
    },

    deleteMessage() {
      this.deleteImgFromStorage()
      if (this.thisGroup === this.$route.params.id) {
        this.dellGroupMessage({id: this.messageId, name: this.$route.params.id}).then(() => {
          this.getRealtimeMessagesGroup({id: this.userId, otherId: this.$route.params.id})
        })
      } else {
        this.dellMessage(this.obj.messageId)
          .then(() => {
            this.getRealtimeMessages({id: this.userId, otherId: this.$route.params.id})
          })
      }

    },

  },

}
</script>



