import { db } from "../firebase.js";
import { doc, runTransaction } from "firebase/firestore";
import { updateDocumentError } from "../common/Exceptions/FirestoreErrorMessage.js";

export const updateRecord = async (collectionName, documentName, propertyName, valueToUpdate) => {
    // Create a reference to the SF doc.
    const docRef = doc(db, collectionName, documentName);

    try {
        await runTransaction(db, async (transaction) => {
            const document = await transaction.get(docRef);
            if (!document.exists()) throw "Document does not exist!";

            const updateJSON = {
                [propertyName]: valueToUpdate
            }

            transaction.update(docRef, updateJSON);
    });

        return `${propertyName} is now updated to ${updatedVal}.`
    } catch (e) {
        throw e + ' ' + updateDocumentError(documentName, collectionName, propertyName, valueToUpdate);
    } finally {
        return `${propertyName} is now updated to ${valueToUpdate}.`
    }
}