import database from '../../Driver/firebase/database/index'
import auth from "firebase/auth";
import auth1 from '@/Driver/firebase';
import firebaseInstance from "@/Driver/firebase";
import chat from '@/Driver/firebase/caht'




let messageRef

export default {

    rugisterUser({}, payload) {

        firebaseInstance.firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(respons => {
                console.log(respons)
                let userId = firebaseInstance.firebase.auth().currentUser.uid
                firebaseInstance.firebase.database().ref('log-users/' + userId).set({
                    name: payload.name, email: payload.email, online: true
                })
            }).catch(error => {
            console.log(error.message)
        })
    },
    loginUser({}, payload) {
        firebaseInstance.firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(respons => {
                console.log(respons)

            })
            .catch(error => {
                console.log(error.message)
            })
    },
    logoutUser() {
        firebaseInstance.firebase.auth().signOut()
    },
    handleAauthStateChanged({commit, dispatch, state}) {
        firebaseInstance.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // User is logged in.
                let userId = firebaseInstance.firebase.auth().currentUser.uid
                firebaseInstance.firebase.database().ref('log-users/' + userId)
                    .once('value', chat => {

                        let userDetails = chat.val()

                        commit('setUserDetails', {
                            name: userDetails.name,
                            email: userDetails.email,
                            userId: userId
                        })
                    })
                dispatch('firebaseUpdateUser', {
                    userId: userId,
                    updates: {
                        online: true
                    }
                })
                dispatch('firebaseGetUser')
                // this.$router.push('/profiles');
            } else {
                // User is logout.
                // commit('setUserDetails' , {})
                dispatch('firebaseUpdateUser', {
                    userId: state.userDetails.userId,
                    updates: {
                        online: false
                    }
                })

                // this.$router.replace('/login');
            }
        })
    },
    updateUserPic({}, pic) {
        firebaseInstance.firebase.database().ref('log-users/' + `SJEhoFZsiERDlRxPAALp5nCNuCj2`).update({pic: pic})
    },

    firebaseUpdateUser({}, payload) {

        if (payload.userId) {
            firebaseInstance.firebase.database().ref('log-users/' + payload.userId).update(payload.updates)
        } else {

        }

    },

    firebaseGetUser({commit}) {
        const users = []
        firebaseInstance.firebase.database().ref('log-users').once('value')
            .then(res => {
                commit('addUser', res.val())
            })
    },
    firebaseGetUser1({commit}) {
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
    firebaseGetMessages({commit, state}, otherUserId) {


        messageRef = firebaseInstance.firebase.database().ref('chats/' + window.user.uid + '/' + otherUserId)
        messageRef.on('child_added', chat => {
            let messageDiteils = chat.val()
            let messageId = chat.key
            commit('addMessage', {
                messageDiteils, messageId
            })
        })

    },
    firebaseStopGetMessages({commit}) {
        if (messageRef) {
            messageRef.off('child_added')
            commit('clearMessages')
        }

    },
    firebaseCleanMessages({commit}) {
            commit('clearMessages')
    },
    SendMessage({state}, payload) {
        chat.firebaseSendMessage({
            myId: window.user.uid,
            // myId: state.userDetails.userId,
            otherId: payload.otherUserId,
            message: payload.message
        });

    },

    getProfileMessages({}, users) {
        messageRef = firebaseInstance.firebase.database().ref('chats/' + window.user.uid )
        messageRef.on('value', chat => {
            let messageDiteils = chat.val()


            var myString = "Item1";

            var jsObject =
                {
                    Item1:
                        {
                            "apples": "red",
                            "oranges": "orange",
                        },
                    Item2:
                        {
                            "bananas": "yellow",
                            "pears": "green"
                        }
                };

            var keys = Object.keys(jsObject); //get keys from object as an array

            keys.forEach(function(key) { //loop through keys array
                console.log(key, key == myString)
            });



            console.log(users)
        })
    }
}