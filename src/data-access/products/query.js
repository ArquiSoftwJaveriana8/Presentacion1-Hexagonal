const query = ({ connects, models }) => {
    //Factory function
    //Freeze the object to prevent any changes, similar to an interface
    return Object.freeze({
      insertNewProduct,
      checkNameExist,
      selectAll,
      selectOne,
      patchProduct,
      deleteProduct,
    });
  
    async function deleteProduct({ id }) {
      try {
        // use sequelize on inserting
        const Product = models.Product;
        console.log("Data Access: Delete product");
        const res = await Product.destroy({
          where: {
            id,
          },
        });
        return res;
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  
    async function insertNewProduct({ data }) {
      try {
        // use sequelize on inserting
        const Product = models.Product;
        console.log("Data Access: Add product");
        const res = await Product.create(data);
        return res;
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  
    async function checkNameExist({ data }) {
      try {
        const pool = await connects();
  
        const { name } = data; // deconstruct
  
        const res = await new Promise((resolve) => {
          const sql = `SELECT id FROM "Products" WHERE "name" = $1`;
          const params = [name];
          pool.query(sql, params, (err, res) => {
            pool.end(); // end connection
  
            if (err) resolve(err);
            resolve(res);
          });
        });
  
        return res;
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  
    async function selectAll({}) {
      try {
        const pool = await connects();
        console.log("Data Access: Select products");
        const res = await new Promise((resolve) => {
          const sql = `SELECT * FROM "Products";`;
          pool.query(sql, (err, res) => {
            pool.end(); // end connection
  
            if (err) resolve(err);
            resolve(res);
          });
        });
  
        return res;
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  
    async function selectOne({ id }) {
      try {
        const pool = await connects();
        console.log("Data Access: Select product by ID");
        const res = await new Promise((resolve) => {
          const sql = `SELECT * FROM "Products" WHERE id = $1;`;
          const params = [id];
          pool.query(sql, params, (err, res) => {
            pool.end(); // end connection
  
            if (err) resolve(err);
            resolve(res);
          });
        });
  
        return res;
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  
  
    async function patchProduct({ data }) {
      try {
        // use sequelize on update
        const Product = models.Product;
        console.log("Data Access: Update product");
        const res = await Product.update(
          {
            name: data.name,
            color: data.color,
            size: data.size,
            brand: data.brand,
          },
          {
            where: {
              id: data.id,
            },
          }
        );
        return res;
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  };
  
  module.exports = query;