import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBfTYT5KR73PmvhbYFrfMTuvsOEPPoCtg0',
  authDomain: 'to-do-app-43457.firebaseapp.com',
  projectId: 'to-do-app-43457',
  storageBucket: 'to-do-app-43457.appspot.com',
  messagingSenderId: '1078440406436',
  appId: '1:1078440406436:web:a6801cde65d517b965a531',
};

export const fb = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
