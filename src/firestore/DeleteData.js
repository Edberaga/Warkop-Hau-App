import { db } from "../firebase.js";
import { doc, deleteDoc } from "@firebase/firestore";
import "../common/Exceptions/FirestoreErrorMessage.js";

export const deleteRecord = async(collectionName, documentName) => {
    try {
        await deleteDoc(doc(db, collectionName, documentName));
    }
    catch(e) {
        throw new Error(deleteDocumentError(documentName, collectionName));
    }
}