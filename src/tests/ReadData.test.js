import { getMenuItemsFromCollection } from "../firestore/ReadData";

test('Able to Fetch Data from Firestore', async() => {
  
    const sayuranData = await getMenuItemsFromCollection('Sayuran');
    expect(sayuranData).not.toBeNull();
  });