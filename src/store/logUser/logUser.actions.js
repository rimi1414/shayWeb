import database from '../../Driver/firebase/database/index'
import auth from "firebase/auth";
import auth1 from '@/Driver/firebase';
import firebaseInstance from "@/Driver/firebase";
import logUser from '@/Driver/firebase/logUser'




export default {

    registerUser({}, payload) {
        logUser.firebaseRugisterUser(payload)
    },
    loginUser({}, payload) {

        logUser.firebaseLoginUser(payload)
    },
    logoutUser(){
        logUser.firebaseLogoutUser()
    },


    handleAauthStateChanged: async ({commit, dispatch, state}) => {
       const userId = await logUser.checkUid()
        const userDetails = await logUser.firebaseUserStatusChanged(userId)

            if (userDetails) {
                // User is login.
                        commit('setUserDetails', {
                            name : userDetails.name,
                            email: userDetails.email,
                            userId: userId
                        })

                dispatch('firebaseUpdateUser', {
                    userId: userId,
                    updates: {
                        online :true
                    }
                })
dispatch('firebaseGetUser')

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

    },
    updateUserPic({},pic ){
        logUser.firebaseUpdateUserPic(pic)
    },

    firebaseUpdateUser({}, payload){

      if(payload.userId){
        logUser.UpdateUser(payload)
      }
    },

    firebaseGetUser : async ({commit}) =>{
   const  users =  await logUser.GetUser()
                commit('addUser', users)

    },
    firebaseGetUser1({commit}){
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


}
