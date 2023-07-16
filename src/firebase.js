 // Import the functions you need from the SDKs you need
 import { initializeApp } from "@firebase/app";
 import { getFirestore } from "@firebase/firestore";
 import { getAuth } from "@firebase/auth";
 require('dotenv').config();

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);

 //To use the firebase authentication
 export const auth = getAuth(app);

 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);