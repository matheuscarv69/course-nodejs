import * as express from "express";
import * as bodyParser from "body-parser";

import Database from "./infra/database";

class StartUp {
  public app: express.Application;
  private db: Database;
  private bodyParser;

  constructor() {
    this.app = express();

    this.db = new Database();
    this.db.createConnection();

    this.middler();
    this.routes();
  }

  middler() {
    this.app.use(bodyParser.json());
    // para poder trabalhar com query string 
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.route('/').get((req, res) => {
      res.send({
        Developer: 'Matheus Carvalho',
        Version: '0.0.1',
      });
    })

    // NewsController

  }
}

export default new StartUp();