const http = require("http");
const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require("./graph");

const app = express();
app.use(
  "/",
  graphqlHttp({
    graphiql: true,
    schema
  })
);

app.listen(3000);
