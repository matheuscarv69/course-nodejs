import * as HttpStatus from "http-status";

import UserService from '../services/authService';
import Helper from '../infra/helper';

class AuthController {

  async create(req, res) {
    const user = req.body;

    const token = await UserService.create(user);

    Helper.sendResponse(res, HttpStatus.CREATED, {
      message: "User created successfully",
      token: token
    });
  }

}

export default new AuthController();