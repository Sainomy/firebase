// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaLd8i_C-_nK9P0w00Xwia7k6KKRrWaak",
  authDomain: "meu-primeiro-firebase-2de81.firebaseapp.com",
  projectId: "meu-primeiro-firebase-2de81",
  storageBucket: "meu-primeiro-firebase-2de81.appspot.com",
  messagingSenderId: "405786869279",
  appId: "1:405786869279:web:0d25cf5e94d86a58ec1f2a",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
export { auth, firestore };
