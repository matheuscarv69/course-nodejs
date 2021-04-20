import * as HttpStatus from 'http-status';
import * as redis from 'redis';

import UserService from '../services/userService';
import Helper from '../infra/helper';

class UserController {

  async get(req, res) {
    try {
      let client = redis.createClient();

      await client.get('users', async function (error, reply) {

        if (reply) {
          console.log('redis');
          Helper.sendResponse(res, HttpStatus.OK, JSON.parse(reply));
        } else {
          console.log('db');

          let result = await UserService.get();
          client.set('users', JSON.stringify(result));
          client.expire('users', 20);
          Helper.sendResponse(res, HttpStatus.OK, result);
        }
      })
    } catch (error) {
      console.error.bind(console, `Error ${error}`);
    }
  }



}

export default new UserController();