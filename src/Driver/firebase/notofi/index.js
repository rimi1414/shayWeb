import firebase from "firebase/app";
import firebaseInstance from '../firebase`';
import "firebase/messaging";
//
// firebase.initializeApp({
//     apiKey: "AIzaSyClkOdZliXB3Ki_fAdiKPN3dB3av5Cgpn0",
//     authDomain: "tonda-datind.firebaseapp.com",
//     databaseURL: "https://tonda-datind-default-rtdb.firebaseio.com",
//     projectId: "tonda-datind",
//     storageBucket: "tonda-datind.appspot.com",
//     messagingSenderId: "183452349270",
//     appId: "1:183452349270:web:c22810b6b37bac568f5cf7"
// })
// const messaging = firebaseInstance.firebase.messaging();
// const messaging1 = firebase.messaging();
//
//
// messaging1.requestPermission()
//     .then(function (){
//         console.log('nnn')
//     })
//     .then(function (token){
//         console.log('token' + token);
//         document.getElementById("token").innerHTML=token;
//     })
//     .catch(function (reason){
//         console.log(reason)
//     })
//
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
//
//
function getMessagingObject() {
    // [START messaging_get_messaging_object]
    const messaging = firebase.messaging();
    // [END messaging_get_messaging_object]
}

function receiveMessage() {
    const messaging = firebase.messaging();
    // [START messaging_receive_message]
    // Handle incoming messages. Called when:
    // - a message is received while the app has focus
    // - the user clicks on an app notification created by a service worker
    //   `messaging.onBackgroundMessage` handler.
    messaging.onMessage((payload) => {
        console.log('Message received. ', payload);
        // ...
    });
    // [END messaging_receive_message]
}

function getToken() {
    const messaging = firebase.messaging();
    // [START messaging_get_token]
    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging.getToken({ vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>' }).then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });
    // [END messaging_get_token]
}

function requestPermission() {
    // [START messaging_request_permission]
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            // TODO(developer): Retrieve a registration token for use with FCM.
            // ...
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
    // [END messaging_request_permission]
}

function deleteToken() {
    const messaging = firebase.messaging();

    // [START messaging_delete_token]
    messaging.deleteToken().then(() => {
        console.log('Token deleted.');
        // ...
    }).catch((err) => {
        console.log('Unable to delete token. ', err);
    });
    // [END messaging_delete_token]
}
