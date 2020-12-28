import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDLqKXuguv5c19BvrUgITY3Cnaf40S_e5w",
  authDomain: "telegram-clone-1342a.firebaseapp.com",
  projectId: "telegram-clone-1342a",
  storageBucket: "telegram-clone-1342a.appspot.com",
  messagingSenderId: "1098216903678",
  appId: "1:1098216903678:web:b6b592e37fcfdd1ad426af"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;

