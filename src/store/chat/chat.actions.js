import database from '../../Driver/firebase/database/index'
import auth from "firebase/auth";
import auth1 from '@/Driver/firebase';
import firebaseInstance from "@/Driver/firebase";

let messageRef

export default {

    rugisterUser({}, payload){

        firebaseInstance.firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(respons =>{
                console.log(respons)
                let userId = firebaseInstance.firebase.auth().currentUser.uid
                firebaseInstance.firebase.database().ref('log-users/'+ userId).set({
                    name: payload.name, email: payload.email, online: true
                })
            }).catch(error => {
            console.log(error.message)
        })
    },
    loginUser({}, payload){
        firebaseInstance.firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(respons =>{
                console.log(respons)

                })
            .catch(error => {
            console.log(error.message)
        })
    },
    logoutUser(){
        firebaseInstance.firebase.auth().signOut()
    },
    handleAauthStateChanged({commit, dispatch, state}){
        firebaseInstance.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // User is logged in.
                let userId = firebaseInstance.firebase.auth().currentUser.uid
                firebaseInstance.firebase.database().ref('log-users/' +userId)
                    .once('value', chat =>{

                        let userDetails = chat.val()

                        commit('setUserDetails', {
                            name : userDetails.name,
                            email: userDetails.email,
                            userId: userId
                        })
                })
                dispatch('firebaseUpdateUser', {
                    userId: userId,
                    updates: {
                        online :true
                    }
                })
dispatch('firebaseGetUser')
                // this.$router.push('/profiles');
            }
            else {
                // User is logout.
                // commit('setUserDetails' , {})
                dispatch('firebaseUpdateUser', {
                   userId: state.userDetails.userId,
                    updates: {
                        online :false
                    }
                })

                // this.$router.replace('/login');
            }
        })
    },
    firebaseUpdateUser({}, payload){

      if(payload.userId){

          firebaseInstance.firebase.database().ref('log-users/' +payload.userId).update(payload.updates)
      }
    },
    firebaseGetUser({commit}){
        firebaseInstance.firebase.database().ref('log-users').on('child_added', chat => {
           let userDetails = chat.val()
        let userId = chat.key
            commit('addUser', {
                userId, userDetails
            })
        })
        firebaseInstance.firebase.database().ref('log-users').on('child_changed', chat => {
            let userDetails = chat.val()
            let userId = chat.key
            commit('updateUser', {
                userId, userDetails
            })
        })
    },
    firebaseGetMessages({commit, state}, otherUserId){

        let userId = state.userDetails.userId
messageRef = firebaseInstance.firebase.database().ref('chats/'+ userId + '/' + otherUserId)
        messageRef.on('child_added', chat =>{
        let messageDiteils = chat.val()
        let messageId = chat.key
       commit('addMessage', {
           messageDiteils, messageId
       })
    })

    },
    firebaseStopGetMessages({commit}){
        if(messageRef){
            messageRef.off('child_added')
            commit('clearMessages')
        }

    },
    firebaseSendMessage({state}, payload ){

        firebaseInstance.firebase.database().ref('chats/' + state.userDetails.userId + '/' + payload.otherUserId)
            .push(payload.message)
        payload.message.from = 'them'
        firebaseInstance.firebase.database().ref('chats/' + payload.otherUserId + '/' + state.userDetails.userId)
            .push(payload.message)

    }
}
