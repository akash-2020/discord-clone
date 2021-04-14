import firebase from 'firebase';
// import firebase from '@firebase/app';
// require('firebase/auth');
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmK1PBU79ulQACyBHXIust2Wk3YuTfL7Y",
    authDomain: "discord-clone-9f913.firebaseapp.com",
    projectId: "discord-clone-9f913",
    storageBucket: "discord-clone-9f913.appspot.com",
    messagingSenderId: "189078394785",
    appId: "1:189078394785:web:38df5a514df9c604d39de0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider};
  export default db;