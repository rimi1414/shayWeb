import firebase from "firebase/app";
import auth from 'firebase/auth';
import "firebase/messaging";
import firebasemessage from '../firebase/firebase-messaging-sw'


firebase.initializeApp({
    apiKey: process.env.VUE_APP_apiKey,
    authDomain: process.env.VUE_APP_authDomain,
    projectId: process.env.VUE_APP_projectId,
    storageBucket: process.env.VUE_APP_storageBucket,
    messagingSenderId: process.env.VUE_APP_messagingSenderId,
    appId: process.env.VUE_APP_appId,

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
    .then(function () {
        console.log('havepromiss')
        return messaging.getToken()
    })
    .then(function (token) {
        console.log('token' + token);
        // document.getElementById("token").innerHTML=token;
    })
    .catch(function (err) {
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