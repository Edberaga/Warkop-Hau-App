import { db } from "../firebase.js";
import { doc, setDoc } from "@firebase/firestore"; 

export const addRecord = async(collectionName, documentName, jsonToWrite) => {
    try {
        await setDoc(doc(db, collectionName, documentName), jsonToWrite);
    }
    catch (e) {
        throw new Error(writeDocumentError(documentName, collectionName, jsonToWrite));
    }
      
}