require("express-async-errors");
const express = require("express");
const router = require("./src/routes");
const errorMiddleware = require('./src/middlewares/error');

const app = express();

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

module.exports = app;
