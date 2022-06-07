import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeYaqFRnR98j026DLAhgO9jDUZFTVRnbk",
    authDomain: "databasereact-64557.firebaseapp.com",
    projectId: "databasereact-64557",
    storageBucket: "databasereact-64557.appspot.com",
    messagingSenderId: "1061450850238",
    appId: "1:1061450850238:web:dbdd01a0cf03cd04f323ef"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase