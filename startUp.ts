import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import Database from "./infra/database";
import NewsController from "./controllers/newsController";
import Auth from "./infra/auth";

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
  }

  routes() {
    this.app.route('/').get((req, res) => {
      res.send({
        Developer: 'Matheus Carvalho',
        Version: '0.0.1',
      });
    })

    this.app.use(Auth.validate);
    // NewsController
    this.app.route('/api/v1/news').get(NewsController.get);
    this.app.route('/api/v1/news/:id').get(NewsController.getById);
    this.app.route('/api/v1/news').post(NewsController.create);
    this.app.route('/api/v1/news/:id').put(NewsController.update);
    this.app.route('/api/v1/news/:id').delete(NewsController.delete);

  }
}

export default new StartUp();