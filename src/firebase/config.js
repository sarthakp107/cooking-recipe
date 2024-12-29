import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5SCn1asDrGRyZLzseY3NuKXJHkjklxWQ",
    authDomain: "meatata-af44a.firebaseapp.com",
    projectId: "meatata-af44a",
    storageBucket: "meatata-af44a.firebasestorage.app",
    messagingSenderId: "828750025308",
    appId: "1:828750025308:web:85f83fe7372b42cd668c99"
  };

  //initialize firebase

  firebase.initializeApp(firebaseConfig);


  //initialize firestore service

  const projectFirestore = firebase.firestore();

  export {projectFirestore}