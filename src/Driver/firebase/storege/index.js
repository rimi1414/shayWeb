import firebaseInstance from '../';
import "firebase/storage";
import "firebase/database";


function onUpload(){

    this.img1=null;
    const storageRef=firebaseInstance.firebase.storage()
        .ref(`${window.user.uid}`);
    var mountainImagesRef = storageRef.child('profile/mountains.jpg');
    return  mountainImagesRef.put(this.imageData)
        .then((snapshot) => {
            console.log('Uploaded a blob or file!') ;
            return   snapshot.ref.getDownloadURL().then((result)=> {
                console.log(result)
                this.img1 =result;
                this.localEditedProfile.pic = this.img1
            });
        });


}


function onUpload1(){

    this.img2=null;
    const storageRef=firebaseInstance.firebase.storage()
        .ref(`${window.user.uid}`);
    var mountainImagesRef = storageRef.child('images/mountains.jpg');
    return  mountainImagesRef.put(this.imageData)
        .then((snapshot) => {
            console.log('Uploaded a blob or file!') ;
            return   snapshot.ref.getDownloadURL().then((result)=> {
                console.log(result)
                this.img2 =result;
                this.localEditedProfile.image = this.img2
            });
        });


}


export default {
    onUpload1,
    onUpload
}