// used when we want to perform strict check on types

// base datatypes that can be checked using the typeof operator
const dataTypes = [ 'string','number','boolean','object'];

// function to check the type of a value
const IsType = (type, value) => {
  if (dataTypes.includes(type))
    return typeof value === type;
  else {
    switch(type)
    {
        // common primitives and other custom types can be added
        case 'integer':
            return Number.isInteger(value);
        case 'double':
            return typeof value === "number" && !Number.isNaN(value) && !Number.isInteger(value);
    }
  }
};

// alternatively we can also check that class an object belongs to? should this be under a different lib?
const IsInstanceOf = (className, obj) => {
    return obj instanceof className;
}

// lists datatypes of variables or properties
const propType = {
    propNameList: ['price', 'name'],
    price: 'double',
    name: 'string'
}

// perform strick check on a variable or property
const checkType = (propName, val) => {
    const index = propType.propNameList.indexOf(propName);
    if (index !== -1) {
        return IsType(propType[propType.propNameList[index]], val);
      }
      return undefined;
}