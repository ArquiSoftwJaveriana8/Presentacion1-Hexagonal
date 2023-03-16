const { Builder } = require("xml2js");

const productSelect = ({ selectProducts }) => {
    return async function get(httpRequest) {
        try {
            //get the httprequest body
            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers["User-Agent"];
            if (httpRequest.headers["Referer"]) {
                source.referrer = httpRequest.headers["Referer"];
            }
            const toView = {
                ...info,
                source,
                id: httpRequest.params.id, // when id is passed
            };
            //Call the use case
            console.log("XML Controller: Select product");
            const products = await selectProducts(toView);

            //Convert JSON to XML
                
            //const builder = new Builder();
            //const xml = builder.buildObject(products);

            return {
                headers: {
                    "Content-Type": "application/xml",
                },
                statusCode: 200,
                body: { products },
            };
        }
        catch (e) {
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

module.exports = productSelect;
