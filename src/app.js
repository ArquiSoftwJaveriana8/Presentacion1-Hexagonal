const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();
env = process.env;
const app = express();

// accessible to any
app.use(cors());

// Body Parser middleware to handle raw JSON files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

// routes
app.use("/api/products", require("./routes/products/app"));


// when invalid routes are entered
app.use(async (req, res) => {
  //Print the route that is no where to be found
  console.log("Wrong route: "+req.originalUrl);
  res.status(404).send(`Route is no where to be found.`);
});

module.exports = app;