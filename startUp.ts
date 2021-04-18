import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as compression from "compression";

import Database from "./infra/database";
import router from "./router/routes";

class StartUp {
  public app: express.Application;
  private db: Database;
  private bodyParser;

  constructor() {
    this.app = express();

    this.db = new Database();
    this.db.createConnection();

    this.middler();
    this.app.use(router);
  }

  enableCors() {
    const options: cors.CorsOptions = {
      methods: "GET, POST, PUT, DELETE, OPTIONS",
      origin: "*"
    }

    this.app.use(cors(options));
  }

  middler() {
    this.enableCors();
    this.app.use(bodyParser.json());
    // para poder trabalhar com query string 
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(compression());
  }

}

export default new StartUp();