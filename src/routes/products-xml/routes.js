//Import controllers
const {
    productAdds,
    productSelects,
    productAddsTxt,
  } = require("../../controller/products-xml/app");
  
  const route = ({ router, makeExpressCallbackXML, validateAuth }) => {
    // #####
    // GET
    router.get("/", validateAuth, makeExpressCallbackXML(productSelects)); //Get All
    router.get("/:id", validateAuth, makeExpressCallbackXML(productSelects)); //Get By ID
    // #####
    // POST
  
    // add new Product
    router.post("/", validateAuth, makeExpressCallbackXML(productAdds));

    // add new Product TXT
    router.post("/txt", validateAuth, makeExpressCallbackXML(productAddsTxt));
  
    return router;
  };
  
  module.exports = route;