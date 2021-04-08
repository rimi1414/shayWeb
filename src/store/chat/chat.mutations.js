import Vue from  'vue'
export default {
    setUserDetails(state ,payload){
        state.userDetails = payload
    },
    addUser(state, payload){
        // state.users[payload.userId]= payload.userDetails  במקום זה השורה הבאה
        Vue.set(state.users, payload.userId, payload.userDetails)
    },
    updateUser(state, payload){
        Object.assign(state.users[payload.userId], payload.userDetails)
    },
    addMessage(state, payload){
        Vue.set(state.messages, payload.messageId, payload.messageDiteils)
    },
    clearMessages(state){
       state.messages={}
    }


}