import { db } from "../firebase.js";
import { doc, getDoc } from "@firebase/firestore";
import { collection, getDocs } from "@firebase/firestore";
import { MenuItem } from "../types/MenuItem.js";
import "../common/Exceptions/FirestoreErrorMessage.js";

//access a collection
export const openCollection = async (collectionName) => {
    try {
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDocs(collectionRef);
      return {
        collectionRef,
        querySnapshot,
      };
    }
    catch (e) {
      throw new Error(retrieveCollectionError(collectionName));
    }

  };

//generic handling
export const readObjectsFromCollection = async (collectionName) => {
    const { collectionRef, querySnapshot } = await openCollection(collectionName);
  
    const objects = [];
  
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const object = {};
  
      // Iterate over each property in the document
      Object.keys(data).forEach((key) => {
        object[key] = data[key];
      });
  
      objects.push(object);
    });
  
    return objects;
  };

//for getting menu items
//not to be confused with the category property of MenuItem
//categoryName here refers to the collection of menu items in firebase db
export const getMenuItemsFromCollection = async (categoryName) => {
  const MenuItems = [];  
  
  try {
      const { collectionRef, querySnapshot } = await openCollection(categoryName);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const tempMenuItem = new MenuItem();
  
        Object.keys(data).forEach((key) => {
          switch(key)
          {
            case "name":
              tempMenuItem.setProperty("name", data["name"]);
              break;
            case "price":
              tempMenuItem.setProperty("price", data["price"]);
              break;
            case "category":
              tempMenuItem.setProperty("category", data["category"]);
              break;
            case "image":
              tempMenuItem.setProperty("imageURL", data["image"]);
              break;
            case "adds_on":
              tempMenuItem.setProperty("addons", data["adds_on"]);
              break;
            case "options":
              tempMenuItem.setProperty("options", data["option"]);
              break;
          }
        });  
    
        MenuItems.push(tempMenuItem);
      });
    }
    catch (e)
    {
      throw new Error(`Exception while opening collection ${categoryName}`);
    }
  
    return MenuItems;
  };

export const openDocument = async (collectionName, documentName) => {
    const docRef = doc(db, collectionName, documentName);
    try {
      const docSnap = await getDoc(docRef);

      return {
        docRef,
        docSnap,
      };
    }
    catch (e) {
      throw new Error(retrieveDocumentsError(documentName, collectionName));
    }
}


