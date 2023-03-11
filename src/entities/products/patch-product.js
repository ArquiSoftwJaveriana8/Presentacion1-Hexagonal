// Business logic for patching a product

const patchProduct = ({ encrypt }) => {
  return function make(id, { name, color, size, brand } = {}) {
    if (!id) {
      throw new Error("Please enter ID of the product.");
    }
    if (!name) {
      throw new Error("Please enter the product's name.");
    }
    if (!color) {
      throw new Error("Please enter the product's color.");
    }
    if (!size) {
      throw new Error("Please enter the product's size.");
    }
    if (!brand) {
      throw new Error("Please enter the product's brand.");
    }
    
    //Encrypt the data
    return Object.freeze({
      getId: () => id,
      getName: () => encrypt(name),
      getColor: () => encrypt(color),
      getSize: () => encrypt(size),
      getBrand: () => encrypt(brand),
    });
  };
};

module.exports = patchProduct;
