<template>
  <div>
    <q-bar class="bars no-margin no-padding">
      <q-toolbar autogrow>
        <q-toolbar-title>
          <q-form @submit="sendMessage">

            <q-input
              dir="rtl"
              style="height: 50px"
              type="textarea"
              @submit="sendMessage"
              v-model="newMessage"
              ref="newMessage"
              bg-color="white"
              outlined
              rounded
              label="Message"
              dense>

<!--              <AddPicture/>-->
<!--              <img :src="imgDetails.url">-->
              <template v-slot:after>
                <q-btn @click="sendMessage"
                       round
                       dense
                       flat
                       type="submit"
                       color="white"
                       icon="send"/>
              </template>
            </q-input>
          </q-form>
        </q-toolbar-title>
      </q-toolbar>
    </q-bar>
  </div>
</template>
<script>


import {mapActions, mapState} from "vuex";
// import AddPicture from "components/Pictures/AddPicture";

export default {
  name: "MessageFooter",
  // components: {AddPicture},

  data() {
    return {
      newMessage: '',
      isImg: false,
      imageId: null,
      imgUrl: null,
      hisImg: null,
    }
  },

  // computed: {
  //   ...mapState('auth', ['user', 'userId']),
  //   ...mapState('group', ['thisGroup']),
  //   ...mapState('images', ['imgDetails']),
  // },
  //
  // methods: {
  //   ...mapActions('chat', ['sendNewMessage']),
  //   ...mapActions('group', ['sendGroupMessage']),
  //
  //   // todo: make this functions bellow reusable and way more efficient than it is right now.
  //
  //   sendMessage() {
  //     let arr = []
  //     if (!Array.isArray(this.newMessage)) {
  //       arr.push(this.newMessage)
  //       this.newMessage = arr
  //     }
  //     if (this.thisGroup === this.$route.params.id) {
  //       this.sendGroupMessage({
  //         newMessage: this.newMessage,
  //         url: this.imgDetails.url,
  //         imgId: this.imgDetails.imgId,
  //         replay: null,
  //         toReplay: '',
  //         id: this.$route.params.id,
  //         from: this.user.name
  //       }, this.$route.params.id).then(() => {
  //         this.newReplay = null
  //       })
  //     } else {
  //       this.sendNewMessage({
  //         newMessage: this.newMessage,
  //         url: this.imgDetails.url,
  //         imgId: this.imgDetails.imgId,
  //         replay: null,
  //         toReplay: '',
  //         from: this.user.name
  //       }, this.$route.params.id)
  //     }
  //     this.clearField()
  //   },
  //   clearField() {
  //     this.newMessage = ''
  //     this.imgDetails.url = null
  //     this.$refs.newMessage.focus()
  //   },
  // },
  //
  // watch: {
  //   newMessage() {
  //     let array = []
  //     let newline = String.fromCharCode(10);
  //     if (this.newMessage.includes(newline + newline)) {
  //       const temp = this.newMessage.split(newline)
  //       for (let i = 0; i < temp.length - 2; i++) {
  //         if (i < temp.length - 3) {
  //           array.push(temp[i] + newline)
  //         } else {
  //           array.push(temp[i])
  //         }
  //       }
  //       this.newMessage = array
  //       this.sendMessage()
  //     }
  //   }
  //
  // }
}
</script>

<style>

</style>
