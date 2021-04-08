import firebase from "firebase/app";
import auth from 'firebase/auth';
import "firebase/messaging";
import firebasemessage from '../firebase/firebase-messaging-sw'


 firebase.initializeApp(  {
    apiKey: "AIzaSyClkOdZliXB3Ki_fAdiKPN3dB3av5Cgpn0",
    authDomain: "tonda-datind.firebaseapp.com",
     databaseURL: "https://tonda-datind-default-rtdb.firebaseio.com",
    projectId: "tonda-datind",
    storageBucket: "tonda-datind.appspot.com",
    messagingSenderId: "183452349270",
    appId: "1:183452349270:web:c22810b6b37bac568f5cf7"
});




// const messaging = firebase.messaging();
//
// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: '/firebase-logo.png'
//     };
//
//     return self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });




//
const messaging = firebase.messaging();

messaging.requestPermission()
    .then(function (){
        console.log('havepromiss')
        return messaging.getToken()
    })
    .then(function (token){
        console.log('token' + token);
        // document.getElementById("token").innerHTML=token;
    })
    .catch(function (err){
        console.log(err)
    })

// messaging.onmessage(function (payload){
//     console.log(payload)
// })
// messaging.onTokenRefresh(function (){
//     messaging.getToken()
//         .then(function (newtoken){
//             console.log('net' + newtoken)
//         })
//         .catch(function (reason){
//             console.log(reason)
//         })
// })




export default {
    firebase
}