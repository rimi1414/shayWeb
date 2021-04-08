import firebaseInstance from '../';
import "firebase/storage";
import "firebase/database";


function getRef(options){
   return  firebaseInstance.firebase.database().ref(`users`)
}
function create(options){
    return firebaseInstance.firebase.database()
        .ref(`users/${window.user.uid}/data/${options.entity}`).push(options.customers);
}

// function get(options){
//     return firebaseInstance.firebase.database()
//         .ref(`users`).once('value')
//         .then(res => {
//             const arr = [];
//             const item = 0;
//             const map = res.val();
//             for (const key in map) {
//                 const x = map[key].data.profiles;
//
//                 for(const y1 in x){
//                      this.item = x[y1]
//                 }
//                 this.item.id = key;
//                 arr.push(this.item);
//             }
//             return arr;
//         })
// }

// ללא אידי:
function get(options){
    return firebaseInstance.firebase.database()
        .ref(`users`).once('value')
        .then(res => {
            const arr = [];
            const map = res.val();
            for (const key in map) {
                const item = map[key].data.profiles;
                item.id = key;
                arr.push(item);
            }
            return arr;
        })
}



function read(options){
    return firebaseInstance.firebase.database().ref(`users`).once('value')
        .then(res =>{
            const arr =[];
           const map = res.val();
for(const i in map) {
        const item = map[i].data.profiles;
        item.id = i
        arr.push(item)

}
            return arr;
        })
}

 function post(options){
    return firebaseInstance.firebase.database()
                   .ref(`users/${window.user.uid}/data/${options.entity}`)
                     .set(options.profile)

}
function updateprofile(options){
    // return firebase.database().ref().update(updates);
    return firebaseInstance.firebase.database()
        .ref(`users/${window.user.uid}/data/${options.entity}`)
        .update(options.newProfile);
}

function deleteprofile(options){

    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}`).remove();

}

// ללא שימוש כרגע:
// function getById(options){
//     return firebaseInstance.firebase.database()
//         .ref(`users/${options.id}/data/profiles`).once('value')
//         .then(res => {
//             return res.val();
//         })
// }

function getmyprofile(options){
    return firebaseInstance.firebase.database().ref(`users/${options.id}/data/${options.entity}`).once('value')
        .then(res =>{
            return res.val();
        })
}
function getmyprofile1(options){
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}`)
        .then(res =>{
            return res.val();
        })
}

function postLev(options){
    return firebaseInstance.firebase.database()
        .ref(`users/${window.user.uid}/data/${options.entity}/lev`)
        .push(options.lev)

}


// יוזר כאשר יש לו איידי
// function get(options){
//     return firebaseInstance.firebase.database().ref(`users`).once('value')
//         .then(res =>{
//             const arr =[];
//             const map = res.val();
//             for(const i in map) {
//                 for (const key in map[i].data.profiles) {
//                     const item = map[i].data.profiles[key];
//                     item.id = key
//                     arr.push(item)
//                 }
//             }
//             return arr;
//         })
// }

// function getmyprofile(options){
//     return firebaseInstance.firebase.database().ref(`users`).once('value')
//         .then(res =>{
//             const arr =[];
//             const map = res.val();
//             for(const i in map) {
//                 for (const key in map[i].data.profiles) {
//                     const item = map[i].data.profiles[key];
//                     item.id = i
//                     arr.push(item)
//                 }
//             }
//             return arr;
//         })
// }


export default {
    get,
    post,
    postLev,
    getmyprofile,
    updateprofile,
    deleteprofile,
    getRef,
    // getById,
    create,
    getmyprofile1,

    // image,
    // onUpload
}

// onUpload(){
//
//     this.img1=null;
//     const storageRef=firebaseInstance.firebase.storage()
//         .ref(`${window.user.uid}`);
//     var mountainImagesRef = storageRef.child('images/mountains.jpg');
//     return  mountainImagesRef.put(this.imageData)
//         .then((snapshot) => {
//             console.log('Uploaded a blob or file!') ;
//             return   snapshot.ref.getDownloadURL().then((result)=> {
//                 console.log(result)
//                 this.editedProfile.pic = result
//             });
//         });
//
//
// },