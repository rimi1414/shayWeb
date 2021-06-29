import firebaseInstance from '../';
import "firebase/storage";
import "firebase/database";


function rugisterUser( payload){

    firebaseInstance.firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(respons =>{
            let userId = firebaseInstance.firebase.auth().currentUser.uid
            firebaseInstance.firebase.database().ref('log-users/'+ userId).set({
                name: payload.name, email: payload.email, online: true
            })
        }).catch(error => {
        console.log(error.message)
    })
}
function loginUser(payload){
    firebaseInstance.firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(respons =>{
            console.log(respons)

        })
        .catch(error => {
            console.log(error.message)
        })
}
function logoutUser(){
    firebaseInstance.firebase.auth().signOut()
}
function handleAauthStateChanged(){
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
}
function updateUserPic({},pic ){
    firebaseInstance.firebase.database().ref('log-users/' + `SJEhoFZsiERDlRxPAALp5nCNuCj2`).update({pic: pic})
}

function firebaseUpdateUser({}, payload){

    if(payload.userId){
        firebaseInstance.firebase.database().ref('log-users/' +payload.userId).update(payload.updates)
    }else {

    }

}

function firebaseGetUser({commit}){
    const users = []
    firebaseInstance.firebase.database().ref('log-users').once('value')
        .then(res =>{
            commit('addUser', res.val())
        })
}
function firebaseGetUser1({commit}){
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
}
function firebaseGetMessages1(){

    let userId = state.userDetails.userId
   firebaseInstance.firebase.database().ref('chats/'+ userId + '/' + otherUserId)
    .on('child_added', chat =>{
        let messageDiteils = chat.val()
        let messageId = chat.key

    })

}
function firebaseStopGetMessages({commit}){
    if(messageRef){
        messageRef.off('child_added')
        commit('clearMessages')
    }

}
function firebaseSendMessage( payload ){

    firebaseInstance.firebase.database().ref('chats/' + window.user.uid + '/' + payload.otherId)
        .push(payload.message)
    payload.message.from = 'them'
    firebaseInstance.firebase.database().ref('chats/' + payload.otherId + '/' + window.user.uid)
        .push(payload.message)


}


export default {
    firebaseSendMessage
}
