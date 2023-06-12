export const retrieveCollectionError = (collectionRef) => {
    return `Failed to retrieve documents from collection ${collectionRef}`;
}

export const retrieveDocumentsError = (documentName, collectionName) => {
    return `Failed to retrieve document ${documentName} from collection ${collectionName}`;
}

export const deleteDocumentError = (documentName, collectionName) => {
    return `Failed to delete document ${documentName} from collection ${collectionName}`;
}

export const writeDocumentError = (documentName, collectionName, jsonToWrite) => {
    return `Failed to write json ${jsonToWrite} into document ${documentName} to collection ${collectionName}`;
}

export const updateDocumentError = (documentName, collectionName, propertyName, value) => {
    return `Failed to update propert ${propertyName} of ${value} of document ${documentName} in collection ${collectionName}`;
}