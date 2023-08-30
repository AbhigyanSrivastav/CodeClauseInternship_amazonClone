import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
  apiKey: "AIzaSyDdEhYGSTLL5diS_MI_mXc7lXHLGdqLcsk",
  authDomain: "clone-e6119.firebaseapp.com",
  projectId: "clone-e6119",
  storageBucket: "clone-e6119.appspot.com",
  messagingSenderId: "1091665839628",
  appId: "1:1091665839628:web:bcf681b19cc6a335b81029"
};

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();

export { db }