const productDelete = ({ deleteProducts }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        //get the httprequest body
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        if (httpRequest.headers["Referer"]) {
          source.referrer = httpRequest.headers["Referer"];
        }
        const toDelete = {
          ...info,
          source,
          id: httpRequest.params.id, // when id is passed
        };
        console.log("REST Controller: Delete product");
        const product = await deleteProducts(toDelete);
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: { product },
        };
      } catch (e) {
        // TODO: Error logging
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message,
          },
        };
      }
    };
  };
  
  module.exports = productDelete;