import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


initializeApp({
  apiKey: "AIzaSyA216wztLamQZs9YkgXPA8MTAxdOwlsKxY",
  authDomain: "restaurant-page-6f4f2.firebaseapp.com",
  projectId: "restaurant-page-6f4f2",
  storageBucket: "restaurant-page-6f4f2.appspot.com",
  messagingSenderId: "870500578528",
  appId: "1:870500578528:web:fc32843e3096de27548c85"
});

export const db = getFirestore();