const productAdd = ({ addProducts }) => {
    return async function post(httpRequest) {
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        if (httpRequest.headers["Referer"]) {
            source.referrer = httpRequest.headers["Referer"];
        }
        //Call the use case
        console.log("XML Controller: Add product");
        const posted = await addProducts({
            ...info,
            source,
        });
        return {
            headers: {
                "Content-Type": "application/xml",
            },
            statusCode: 201,
            body: { posted },
        };
    }
};

module.exports = productAdd;