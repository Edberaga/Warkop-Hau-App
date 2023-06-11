import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteRecord = async(collectionName, documentName) => {
    await deleteDoc(doc(db, collectionName, documentName));
}