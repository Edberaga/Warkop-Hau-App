import { assertType } from "../util/typeChecker";

export class MenuItem {

    constructor() {
      this.name = "Menu Item";
      this.price = 0.00;
      this.category = "No category";
      this.imageURL = "";
      this.options = {};
      this.addons = {};
    }

    setAll(name, price, category, imageURL, options, addons) {
      this.name = name;
      this.price = price;
      this.category = category;
      this.imageURL = imageURL;
      this.options = options;
      this.addons = addons;

      for (let prop in this) {
        this.assertPropertyType(prop);
      }
    }
  
    //usage: menuItem.getProperty(propertyName);
    get(propertyName) {
        return this[propertyName];
      }

    //usage: menuItem.setProperty(propertyName, propertyValue);
    set(propertyName, propertyValue) {
        this[propertyName] = value;
        this.assertPropertyType(propertyName);
      }

    assertPropertyType(propName) {
      switch(propName){
        case 'name':
          assertType(this.name, 'string');
          break;
        case 'price':
          assertType(this.price, 'double');
          break;
        case 'category':
          assertType(this.category, 'string');
          break;
        case 'imageURL':
          assertType(this.imageURL, 'string');
          break;
        case 'options':
          assertType(this.options, 'object');
          break;
        case 'addons':
          assertType(this.addons, 'object');
          break;
      }
    }
  }

