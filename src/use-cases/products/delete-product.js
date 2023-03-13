const deleteProduct = ({ productsDb }) => {
    return async function select(info) {
      const { id } = info;
      // delete query
      const res = await productsDb.deleteProduct({ id });
      let msg = `Product was not deleted, please try again.`;
      if (res == 1) {
        msg = `Product deleted successfully.`;
        return msg;
      } else {
        throw new Error(msg);
      }
    };
  };
  
  module.exports = deleteProduct;