import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBoxmSP4Y7MG4GbVRYlno9FX1i1hEnUT4k",
  authDomain: "udm-crwn-proj1104.firebaseapp.com",
  databaseURL: "https://udm-crwn-proj1104.firebaseio.com",
  projectId: "udm-crwn-proj1104",
  storageBucket: "udm-crwn-proj1104.appspot.com",
  messagingSenderId: "347327394957",
  appId: "1:347327394957:web:98db4dbb956629bd249ec4"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
