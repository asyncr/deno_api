import { MongoDBConnector, MySQLConnector } from "../dependences.ts";

export const connectorMariaDB = new MySQLConnector({
  database: "quotes",
  host: "localhost",
  username: "devDeno",
  password: "asyncr",
  port: 3306,
});

export const connectorMongoDB = new MongoDBConnector({
     //"mongodb://usuario:contraseña@host:puerto"
  // uri: "mongodb://root:mongodb@192.168.0.109:27017",
  uri: "mongodb://root:mongodb@192.168.5.28:27017",
  database: "quotes",
});
