import * as jwt from 'jsonwebtoken';
import * as HttpStatus from 'http-status';

import Helper from '../infra/helper';
import Configs from '../infra/configs'

class AuthController {

  create(req, res) {
    let { username, email } = req.body;

    let payload = {
      iss: "127.0.0.0",
      iat: new Date().getSeconds(),
      exp: new Date().setMinutes(60),
      username: username,
      email: email
    };

    const token = jwt.sign(payload, Configs.secret);

    Helper.sendResponse(res, HttpStatus.CREATED, token);
  }

}

export default new AuthController();