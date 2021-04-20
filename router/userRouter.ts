import * as express from "express";

import UserController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get('/api/v1/users', UserController.get);

export default userRouter;