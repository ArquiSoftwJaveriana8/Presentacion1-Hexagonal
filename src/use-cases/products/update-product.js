const updateProduct = ({ productsDb, patchProducts }) => {
    return async function put({ id, ...info }) {
      let data = patchProducts(id, info);
  
      data = {
        id: data.getId(),
        name: data.getName(),
        color: data.getColor(),
        size: data.getSize(),
        brand: data.getBrand(),
      };
  
      // check id if the product exist
      const checkId = await productsDb.selectOne({ id: data.id });
      if (checkId.rowCount == 0)
        throw new Error(`Product doesn't exist, please check.`);

      // update
      const res = await productsDb.patchProduct({ data });
  
      let msg = `Product was not updated, please try again`;
      if (res[0] == 1) {
        msg = `Product updated successfully.`;
        return msg;
      } else {
        throw new Error(msg);
      }
    };
  };
  
  module.exports = updateProduct;