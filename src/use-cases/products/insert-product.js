const addProduct = ({ productsDb, createProducts }) => {
    //Post a new product
    return async function post(info) {
      let data = await createProducts(info); // entity
  
      data = {
        name: data.getName(),
        color: data.getColor(),
        size: data.getSize(),
        brand: data.getBrand(),
      };
  
      //   insert
      const res = await productsDb.insertNewProduct({ data });
  
      // ##
      let msg = `Error on inserting product, please try again.`;
  
      if (res) {
        msg = `Product has been added successfully.`;
        return msg;
      } else {
        throw new Error(msg);
      }
    };
  };
  
  module.exports = addProduct;