// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

console.log("Firebase Config:", firebaseConfig);
// console.log('API Key:', process.env.FIREBASE_API_KEY);
// console.log('Auth Domain:', process.env.FIREBASE_AUTH_DOMAIN);

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firebase Auth et Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
