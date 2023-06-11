const retrieveCollectionError = (collectionRef) => {
    return `Failed to retrieve documents from collection ${collectionRef}`;
}

const retrieveDocumentsError = (documentName, collectionName) => {
    return `Failed to retrieve document ${documentName} from collection ${collectionName}`;
}

const deleteDocumentError = (documentName, collectionName) => {
    return `Failed to delete document ${documentName} from collection ${collectionName}`;
}

const writeDocumentError = (documentName, collectionName, jsonToWrite) => {
    return `Failed to write json ${jsonToWrite} into document ${documentName} to collection ${collectionName}`;
}