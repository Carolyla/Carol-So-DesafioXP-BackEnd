require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "database_development",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql"
  },
  test: {
    username: "trybeql",
    password: "trybe12345",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "trybeql",
    password: "trybe12345",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
