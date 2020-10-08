import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCIWzVIqjw1lxnAOt7zuIr6KNVwYeoJqnY",
    authDomain: "crwn-db-33f60.firebaseapp.com",
    databaseURL: "https://crwn-db-33f60.firebaseio.com",
    projectId: "crwn-db-33f60",
    storageBucket: "crwn-db-33f60.appspot.com",
    messagingSenderId: "22545161856",
    appId: "1:22545161856:web:525686ed4b269d79c95065",
    measurementId: "G-KWNPGPMV72"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;