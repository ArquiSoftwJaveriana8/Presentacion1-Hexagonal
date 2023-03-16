const xml2js = require("xml2js");

const makeExpressCallbackXML = (controller) => {
  return (req, res) => {
    //Convert XML to JSON
    if (req.body.length > 0) {
      const parser = new xml2js.Parser();
      xml = req.body;
      parser.parseString(xml, function (err, result) {
        result = JSON.stringify(result.product);
        req.body = result;
      });
      //For each value on the json, extract the first value
      req.body = JSON.parse(req.body);
      for (const [key, value] of Object.entries(req.body)) {
        req.body[key] = value[0];
      }

      //console.log("XML to JSON: " + JSON.stringify(req.body));
    }

    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
        Cookie: req.get("Authorization"),
        "Access-Control-Allow-Origin": "*",
      },
    };
    controller(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set("Access-Control-Allow-Origin", "*");
          res.set(httpResponse.headers);
        }
        res.type("xml");
        //Convert JSON to XML
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(httpResponse.body);
    
        res.status(httpResponse.statusCode).send(xml);
      })
      .catch((e) => res.sendStatus(500));
  };
};

module.exports = makeExpressCallbackXML;
