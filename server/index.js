const express = require("express");

const app = express();

const getProducts = require("./getProducts");

const getProduct = require("./getProduct");

const port = 4001;

app.get("/api/products", getProducts);

app.get("/api/products/:id", getProduct);

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
