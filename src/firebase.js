// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA93X1qLKx5aO4TwiWV8FeK1uEYCothOQ8",
    authDomain: "spacex-launch-dashboard.firebaseapp.com",
    projectId: "spacex-launch-dashboard",
    storageBucket: "spacex-launch-dashboard.appspot.com",
    messagingSenderId: "188014605563",
    appId: "1:188014605563:web:d8df2615057b522495ac5e",
    measurementId: "G-4ZZBPKJV59"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};