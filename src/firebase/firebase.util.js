import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
  apiKey: "AIzaSyCwgA9SL8Sv2B_lDq0B3EL-ffBS8ymYWrs",
  authDomain: "crwn-clothing-db-97f5f.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-97f5f.firebaseio.com",
  projectId: "crwn-clothing-db-97f5f",
  storageBucket: "crwn-clothing-db-97f5f.appspot.com",
  messagingSenderId: "515262066557",
  appId: "1:515262066557:web:8001fdbd836336b3dfe614",
  measurementId: "G-VDW6JG4NDM"
}

export const createUserProfileDocument=async(userAuth,additionalData)=>{
  if(!userAuth)return ;
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot=await userRef.get();

  if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const createAt=new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user',e.message)
    }
  }  

  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;