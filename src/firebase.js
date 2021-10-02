import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAJTugm30C6GtoQrvWESEpveeOCUIGP_1E',
  authDomain: 'notebook-6cdfe.firebaseapp.com',
  projectId: 'notebook-6cdfe',
  storageBucket: 'notebook-6cdfe.appspot.com',
  messagingSenderId: '195631802456',
  appId: '1:195631802456:web:d88674bdbb3a8fd10fc22d',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
