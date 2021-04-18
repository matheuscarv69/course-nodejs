import * as express from "express";

import NewsController from "../controllers/newsController";

const newsRouter = express.Router();

newsRouter.get('/api/v1/news', NewsController.get);
newsRouter.get('/api/v1/news/:id', NewsController.getById);
newsRouter.post('/api/v1/news', NewsController.create);
newsRouter.put('/api/v1/news/:id', NewsController.update);
newsRouter.delete('/api/v1/news/:id', NewsController.delete);

export default newsRouter;