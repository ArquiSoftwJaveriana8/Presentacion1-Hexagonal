//Import CRUD use cases
const {
    addProducts,
    selectProducts,
    updateProducts,
    deleteProducts,
  } = require("../../use-cases/products/app");
  // #########

  //Get all controllers
  const productAdd = require("./insert-product-xml.js");
  const productSelect = require("./select-product-xml.js");
  //const productUpdate = require("./update-product-xml.js");
  //const productDelete = require("./delete-product-xml.js");
  // #########
  //Link controllers with use cases
  const productAdds = productAdd({ addProducts });
  const productSelects = productSelect({ selectProducts });
  //const productUpdates = productUpdate({ updateProducts });
  //const productDeletes = productDelete({ deleteProducts });
  // #########
  
  //Export controllers
  const services = Object.freeze({
    productAdds,
    productSelects,
    //productUpdates,
    //productDeletes,
  });
  
  module.exports = services;
  module.exports = {
    productAdds,
    productSelects,
    //productUpdates,
    //productDeletes,
  };