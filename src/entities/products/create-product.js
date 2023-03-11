// Business logic for creating a product

const createProduct = ({ encrypt }) => {
  return function make({ name, color, size, brand } = {}) {
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
      getName: () => encrypt(name),
      getColor: () => encrypt(color),
      getSize: () => encrypt(size),
      getBrand: () => encrypt(brand),
    });
  };
};

module.exports = createProduct;
