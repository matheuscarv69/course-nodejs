import UserRepository from '../repositories/userRepository';

class UserService {

  async get() {
    let result = await UserRepository.find({});
    return result;
  }

}

export default new UserService();