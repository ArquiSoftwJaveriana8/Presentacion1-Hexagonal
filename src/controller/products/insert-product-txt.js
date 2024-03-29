const productAdd = ({ addProductsTxt }) => {
    return async function post(httpRequest) {
      try {
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        if (httpRequest.headers["Referer"]) {
          source.referrer = httpRequest.headers["Referer"];
        }
        //Call the use case
        console.log("REST Controller: Add product TXT");
        const posted = await addProductsTxt({
          ...info,
          source,
        });
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 201,
          body: { posted },
        };
      } catch (e) {
        // TODO: Error logging
        console.log(e);
  
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 400,
          body: {
            error: e.message,
          },
        };
      }
    };
  };
  
  module.exports = productAdd;