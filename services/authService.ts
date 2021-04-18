import * as jwt from "jsonwebtoken";

import UserRepository from "../repositories/userRepository";

import Configs from "../infra/configs";

class AuthService {

  async create(user) {

    let payload = {
      iss: "127.0.0.0",
      iat: new Date().getSeconds(),
      exp: new Date().setMinutes(60),
      username: user.username,
      email: user.email
    };

    const token = jwt.sign(payload, Configs.secret);

    await UserRepository.create(user);

    return token;
  }

}

export default new AuthService();