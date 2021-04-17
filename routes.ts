import * as express from "express";

import authController from "./controllers/authController";
import uploads from "./infra/uploads";
import Auth from './infra/auth';
import newsController from "./controllers/newsController";

const router = express.Router();

// root
router.get("/", (req, res) => {
  res.send({
    Developer: 'Matheus Carvalho',
    Version: '0.0.3'
  });
});

// Authentication
router.post('/api/v1/users', authController.create);

router.use(Auth.validate)

// Upload Files
router.post('/api/v1/news/uploads', uploads.single('file'), (req, res) => {
  try {
    res.send("Upload file successfully!");
  } catch (error) {
    console.log(error);
  }
})

// News Controller
router.get('/api/v1/news', newsController.get);
router.get('/api/v1/news/:id', newsController.getById);
router.post('/api/v1/news', newsController.create);
router.put('/api/v1/news/:id', newsController.update);
router.delete('/api/v1/news/:id', newsController.delete);

export default router;