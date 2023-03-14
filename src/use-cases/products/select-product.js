const selectProduct = ({ productsDb, decrypt }) => {
  return async function select(info) {
    let data = [];

    const { id } = info; // deconstruct

    if (id) {
      // select one
      const res = await productsDb.selectOne({ id });
      if (res.rowCount > 0) {
        // only when there is data returned
        const items = res.rows;
        for (let i = 0; i < items.length; i++) {
          const e = items[i];

          // push items to array
          data.push({
            id: e.id,
            name: e.name ? decrypt(e.name) : null,
            color: e.color ? decrypt(e.color) : null,
            size: e.size ? e.size : null,
            brand: e.brand ? decrypt(e.brand) : null,
            createdAt: e.createdAt,
            updatedAt: e.updatedAt,
          });
        }
      }//Not found
      else{
        throw new Error("Product not found");
      }
    } else {
      // select all
      const res = await productsDb.selectAll({});
      if (res.rowCount > 0) {
        // only when there is data returned
        const items = res.rows;
        for (let i = 0; i < items.length; i++) {
          const e = items[i];

          // push items to array
          data.push({
            id: e.id,
            name: e.name ? decrypt(e.name) : null,
            color: e.color ? decrypt(e.color) : null,
            size: e.size ? e.size : null,
            brand: e.brand ? decrypt(e.brand) : null,
            createdAt: e.createdAt,
            updatedAt: e.updatedAt,
          });
        }
      }
    }
    return data;
  };
};

module.exports = selectProduct;
