import { getMenuItemsFromCollection } from "../services/firestore/ReadData";

test('Able to Fetch Data from Firestore', async() => {
  
    const sayuranData = await getMenuItemsFromCollection('Sayuran');
    expect(sayuranData).not.toBeNull();
  });