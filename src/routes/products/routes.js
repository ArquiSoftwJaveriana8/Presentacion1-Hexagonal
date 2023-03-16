//Import controllers
const {
    productAdds,
    productSelects,
    productUpdates,
    productDeletes,
    //TXT
    productAddsTxt,
  } = require("../../controller/products/app");
  
  const route = ({ router, makeExpressCallback, validateAuth }) => {
    // #####
    // GET
    router.get("/", validateAuth, makeExpressCallback(productSelects)); //Get All
    router.get("/:id", validateAuth, makeExpressCallback(productSelects)); //Get By ID
    // #####
    // POST
  
    // add new Product
    router.post("/", validateAuth, makeExpressCallback(productAdds));
    // add new Product TXT
    router.post("/txt", validateAuth, makeExpressCallback(productAddsTxt));
  
    // #####
    // PATCH
  
    // update Product
    router.put("/:id", validateAuth, makeExpressCallback(productUpdates));
  
    // #####
    // DELETE
  
    router.delete("/:id", validateAuth, makeExpressCallback(productDeletes));
  
    return router;
  };
  
  module.exports = route;