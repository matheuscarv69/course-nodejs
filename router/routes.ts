import * as express from "express";

import uploads from "../infra/uploads";
import Auth from '../infra/auth';

import authRouter from "./authRouter";
import newsRouter from "./newsRouter";

const router = express.Router();

// root
router.get("/", (req, res) => {
  res.send({
    Developer: 'Matheus Carvalho',
    Version: '0.0.3'
  });
});

// Authentication
router.use(authRouter);
// router.use(Auth.validate);

// News
router.use(newsRouter);

// Upload Files
router.post('/api/v1/news/uploads', uploads.single('file'), (req, res) => {
  try {
    res.send("Upload file successfully!");
  } catch (error) {
    console.log(error);
  }
})

export default router;