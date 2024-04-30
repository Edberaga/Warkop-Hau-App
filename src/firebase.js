 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore"
 import { getAuth } from "firebase/auth";
 
 const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "warkop-hau-app.firebaseapp.com",
  projectId: "warkop-hau-app",
  storageBucket: "warkop-hau-app.appspot.com",
  messagingSenderId: "307075684990",
  appId: "1:307075684990:web:459cd5eda9ef62c6e7562f",
  measurementId: "G-R215ND2R04"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 //To use the firebase authentication
 export const auth = getAuth(app);

 // Export firestore database
 export const db = getFirestore(app);