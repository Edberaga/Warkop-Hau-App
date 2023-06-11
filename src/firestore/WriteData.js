import { db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore"; 

export const addRecord = async(collectionName, documentName, jsonToWrite) => {
    await setDoc(doc(db, collectionName, documentName), jsonToWrite);
      
}