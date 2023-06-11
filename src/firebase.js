 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWUdZvNslGB8D0S_5SAwfGfdGJD0m5X5c",
  authDomain: "warkop-hau-app.firebaseapp.com",
  projectId: "warkop-hau-app",
  storageBucket: "warkop-hau-app.appspot.com",
  messagingSenderId: "307075684990",
  appId: "1:307075684990:web:459cd5eda9ef62c6e7562f",
  measurementId: "G-R215ND2R04"
};
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);