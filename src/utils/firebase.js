import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseApp = null;

export default function firebaseInit() {
  if (firebaseApp === null) {
    const firebaseConfig = {
      apiKey: 'apiKey-value',
      authDomain: 'authDomain-value',
      databaseURL: 'databaseURL-value',
      projectId: 'projectId-value',
      storageBucket: 'storageBucket-value',
      messagingSenderId: 'messagingSenderId-value',
      appId: 'appId-value',
    };

    firebaseApp = firebase.initializeApp(firebaseConfig);
    window.firebaseApp = firebaseApp;
  }
  return firebaseApp;
}
