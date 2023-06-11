export class MenuItem {
    constructor(name, price, category, imageURL, options, addons) {
      this.name = name;
      this.price = price;
      this.category = category;
      this.imageURL = imageURL;
      this.options = options;
      this.addons = addons;
    }
  
    //usage: menuItem.getProperty(propertyName);
    getProperty(propertyName) {
        return this[propertyName];
      }

    //usage: menuItem.setProperty(propertyName, propertyValue);
    setProperty(propertyName, propertyValue) {
        this[propertyName] = value;
      }
  }

