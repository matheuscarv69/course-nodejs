import * as jwt from "jsonwebtoken";

import Configs from "./configs";

class Auth {

  validate(req, res, next) {

    var token = req.headers['x-access-token'];

    if (token) {

      jwt.verify(token, Configs.secret, function (error, decoded) {

        if (error) {
          return res.status(403).send({
            success: false,
            message: '403 - invalid token'
          })
        } else {
          next();
        }

      })

    } else {

      return res.status(401).send({
        success: false,
        message: '401 - unauthorized'
      })

    }
  }
}

export default new Auth();