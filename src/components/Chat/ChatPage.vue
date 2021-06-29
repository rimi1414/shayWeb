<template>
  <q-page class="a-page col">
<!--    todo: change the cancellation of header in mobile to vue code, not css-->
<!--    todo: new component for header-->
    <!--  // : header /// -->
<!--    <div class="a-header" style="margin-top: 70px">-->
<!--      <h5>dsdsdg</h5>-->
<!--      <q-bar dense elevated class="small-screen-only text-white  bars">-->
<!--        <q-toolbar>-->
<!--          <q-btn flat round dense icon="arrow_back_ios_new" class="q-mr-xs" style="font-size: 10px" to="/chat"/>-->
<!--          <q-avatar color="primary" text-color="white" >-->
<!--            <img-->
<!--              src="https://st.depositphotos.com/2101611/4338/v/950/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg">-->
<!--          </q-avatar>-->
<!--&lt;!&ndash;          <q-avatar color="primary" text-color="white" v-if="hisImg">&ndash;&gt;-->
<!--&lt;!&ndash;            <img :src=hisImg>&ndash;&gt;-->
<!--&lt;!&ndash;          </q-avatar>&ndash;&gt;-->
<!--&lt;!&ndash;          <q-toolbar-title v-if="this.thisGroup == this.$route.params.id"> {{ thisGroup }}</q-toolbar-title>&ndash;&gt;-->
<!--&lt;!&ndash;          <q-toolbar-title v-else>{{ localUserName }}</q-toolbar-title>&ndash;&gt;-->
<!--          <q-btn  flat dense icon="paragliding" class="q-mr-lg" style="font-size: 20px"/>-->
<!--        </q-toolbar>-->
<!--      </q-bar>-->
<!--    </div>-->
    <!--  // : header /// -->

<!--todo: arrange this pop up below, keep it clean and simple-->
<!--    a good example can be found in GroupMessage component -->
    <!--  // : popup (group management) /// -->
<!--    <div  class="a-popup" v-if="this.thisGroup == this.$route.params.id">-->
<!--      <q-btn icon="add" color="primary" @click="inception = true"></q-btn>-->
<!--      <q-dialog v-model="inception">-->
<!--        <q-card>-->
<!--          <AddRemoveMember/>-->
<!--        </q-card>-->
<!--      </q-dialog>-->
<!--    </div>-->
    <!--  // : popup (group management) /// -->

    <!--  // : message /// -->
    <div class="a-body ">
      <MessageBody/>
    </div>
    <!--  // : message /// -->

    <!--  // : footer /// -->
    <div class="a-footer">
      <MessageFooter/>
    </div>
    <!--  // : footer /// -->

  </q-page>
</template>

<script>

import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'
import MessageBody from "../../components/Chat/MessageBody";
import MessageFooter from "../../components/Chat/MessageFooter";
// import AddRemoveMember from "../components/Chat/Group/AddRemoveMember";

export default {
  name: "ChatPage",
  components: {MessageBody,MessageFooter},

  data() {
    return {
      inception: false,
      localUserName: '',
      isImg: false,
      hisImg: null,
    }
  },

  // computed: {
  //   ...mapState('chat', ['messagesById']),
  //   ...mapState('auth', ['user', 'userId']),
  //   ...mapState('group', ['groups', 'thisGroup']),
  //   ...mapGetters('users', ['users']),
  // },
  //
  // methods: {
  //   ...mapActions('users', ['getUsers']),
  //   ...mapActions('auth', ['getUserById', 'getUserId']),
  //   ...mapMutations('chat', ['setOtherId']),
  //   ...mapActions('chat', ['loadMoreMessagesAction']),
  //   ...mapActions('group', ['getThisGroup']),
  //
  //   loadMoreMsgs() {
  //     this.loadMoreMessagesAction()
  //   },
  //   updateLocalMessages(){
  //     this.getThisGroup(this.$route.params.id)
  //     this.getUsers()
  //       .then(() => {
  //         this.setOtherId(this.$route.params.id)
  //         this.getUserId()
  //           .then(() => {
  //             this.getUserById(this.userId)
  //               .then(() => {
  //                 if (this.$route.params.id) {
  //                   this.localUserName = this.users[this.$route.params.id].name
  //                   this.hisImg = this.users[this.$route.params.id].img
  //                 }
  //               })
  //           })
  //       })
  //   }
  // },
  //
  // created() {
  //   this.updateLocalMessages()
  // },
  //
  // watch: {
  //   '$route'(){
  //     this.updateLocalMessages()
  //   }
  // }
}
</script>

<style lang="sass" scoped>



.a-page
  position: relative

.a-header
  position: absolute
  top: 0

.a-body
  position: absolute
  top: 0
  bottom: 60px
  z-index: 0
  box-sizing: border-box
  display: flex
  flex-direction: column
  width: 100%
  height: 100%
  //overflow-x: hidden
  //overflow-y: hidden
  transition: background .3s ease-out .1s
  transition-property: background
  transition-duration: 0.3s
  transition-timing-function: ease-out
  transition-delay: 0.1s

.a-popup
  position: absolute
  bottom: 10%
  right: 1%
  z-index: 1

//.bg-flash
//  background: linear-gradient(135deg, #e0d410 13px, transparent 13px) 15px 45px,
//  linear-gradient(315deg, #e0d410 13px, transparent 13px) 25px 45px,
//  linear-gradient(135deg, #e0d410 13px, transparent 13px) 77px 97px,
//  linear-gradient(315deg, #e0d410 13px, transparent 13px) 87px 97px;
//  background-color: #e1ebbe;
//  background-size: 100px 100px;
//  opacity 0.9

.a-footer
  position: fixed
  bottom: 0
  max-width: 675px
  width: 100%

</style>
