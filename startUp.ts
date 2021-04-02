import * as express from "express";

import Database from "./infra/database";

class StartUp {
  public app: express.Application;
  private db: Database;

  constructor() {
    this.app = express();

    this.db = new Database();
    this.db.createConnection();

    this.routes();
  }

  routes() {
    this.app.route('/').get((req, res) => {
      res.send({
        Developer: 'Matheus Carvalho',
        Version: '0.0.1',
      })
    })
  }
}

export default new StartUp();