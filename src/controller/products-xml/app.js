//Import CRUD use cases
const {
    addProducts,
    selectProducts,
    updateProducts,
    deleteProducts,
  } = require("../../use-cases/products/app");
  // #########

  //Import TXT Use Case
const {
  addProductsTxt,
} = require("../../use-cases/products-txt/app");

  //Get all controllers
  const productAdd = require("./insert-product-xml.js");
  const productSelect = require("./select-product-xml.js");

  //Get TXT controllers
  const productAddTxt = require("./insert-product-xml-txt.js");

  // #########
  //Link controllers with use cases
  const productAdds = productAdd({ addProducts });
  const productSelects = productSelect({ selectProducts });

  //Link TXT controllers with use cases
  const productAddsTxt = productAddTxt({ addProductsTxt });

  // #########
  
  //Export controllers
  const services = Object.freeze({
    productAdds,
    productSelects,
    productAddsTxt,
  });
  
  module.exports = services;
  module.exports = {
    productAdds,
    productSelects,
    productAddsTxt,
    
  };