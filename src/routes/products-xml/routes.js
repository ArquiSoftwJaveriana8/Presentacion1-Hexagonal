//Import controllers
const {
    productAdds,
    productSelects,
    //productUpdates,
    //productDeletes,
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
  
    // #####
    // PATCH
  
    // update Product
    //router.put("/:id", validateAuth, makeExpressCallbackXML(productUpdates));
  
    // #####
    // DELETE
  
    //router.delete("/:id", validateAuth, makeExpressCallbackXML(productDeletes));
  
    return router;
  };
  
  module.exports = route;