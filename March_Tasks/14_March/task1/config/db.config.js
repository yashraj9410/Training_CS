// configuring the database connection

module.exports = {
    HOST: "localhost",
    PORT: "1433",
    USER: "sa",
    PASSWORD: "1234",
    DB: "restaurant_db",
    dialect: "mssql",
    pool: {
      max: 5,                // max number of connection in a pool
      min: 0,                // min number of connection in a pool
      acquire: 30000,        // max time in ms the connection will wait before throwing error
      idle: 10000            // time in ms the connection will be idle before getting released 
    }
  };

