//Import CRUD use cases
const {
    addProducts,
    selectProducts,
    updateProducts,
    deleteProducts,
  } = require("../../use-cases/products/app");
  // #########

  //Get all controllers
  const productAdd = require("./insert-product.js");
  const productSelect = require("./select-product.js");
  const productUpdate = require("./update-product.js");
  const productDelete = require("./delete-product.js");
  // #########
  //Link controllers with use cases
  const productAdds = productAdd({ addProducts });
  const productSelects = productSelect({ selectProducts });
  const productUpdates = productUpdate({ updateProducts });
  const productDeletes = productDelete({ deleteProducts });
  // #########
  
  //Export controllers
  const services = Object.freeze({
    productAdds,
    productSelects,
    productUpdates,
    productDeletes,
  });
  
  module.exports = services;
  module.exports = {
    productAdds,
    productSelects,
    productUpdates,
    productDeletes,
  };