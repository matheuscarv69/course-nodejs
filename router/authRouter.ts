import * as express from "express";

import AuthController from "../controllers/authController";

const authRouter = express.Router();

authRouter.post('/api/v1/users', AuthController.create);

export default authRouter;