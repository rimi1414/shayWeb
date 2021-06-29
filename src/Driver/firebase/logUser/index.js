// import database from '../../Driver/firebase/database/index'
// import auth from "firebase/auth";
// import auth1 from '@/Driver/firebase';
import firebaseInstance from "@/Driver/firebase";
// import "firebase/storage";
// import "firebase/database";

   function firebaseRugisterUser( payload){

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
       }
   function firebaseLoginUser( payload){

           firebaseInstance.firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
               .then(respons => {
                   console.log(respons)

               })
               .catch(error => {
                   console.log(error.message)
               })
       }

   function firebaseLogoutUser(){
        firebaseInstance.firebase.auth().signOut()
    }


function firebaseUserStatusChanged(userId) {

            // const userId = firebaseInstance.firebase.auth().currentUser.uid

           return   firebaseInstance.firebase.database().ref('log-users/' + userId)
                .once('value').then((chat) => {
                    return chat.val()
                })

}


function firebaseUserStatusChanged1(){

}
function checkUid(){
    return  firebaseInstance.firebase.auth().currentUser.uid
}

   function firebaseUpdateUserPic(pic ){
        firebaseInstance.firebase.database().ref('log-users/' + `SJEhoFZsiERDlRxPAALp5nCNuCj2`).update({pic: pic})
    }

  function  UpdateUser( payload){

      if(payload.userId){
          firebaseInstance.firebase.database().ref('log-users/' +payload.userId).update(payload.updates)
      }else {

      }

    }

  function  GetUser(){
      return   firebaseInstance.firebase.database().ref('log-users').once('value')
            .then(res =>{
                return  res.val()
            })
    }
   function firebaseGetUser1(){
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


export default {
    firebaseRugisterUser,
    firebaseLoginUser,
    firebaseLogoutUser,
    firebaseUserStatusChanged,
    firebaseUpdateUserPic,
    UpdateUser,
    firebaseGetUser1,
    GetUser,
    checkUid
}

