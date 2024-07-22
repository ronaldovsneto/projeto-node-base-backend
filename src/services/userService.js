import UserRepository from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';
import config from '../config/config.js';

class UserService {

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(user) {
    const hashedPassword = await bcrypt.hash(user.password, config.saltRound);
    user.password = hashedPassword;
    return await this.userRepository.create(user);
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    const usersWithoutPass = users.map( user => {
      const {password, ...usersWithoutPass} = user.dataValues;
      return usersWithoutPass;
    });
    return usersWithoutPass;
  }

  async findById(id) {
    return await this.userRepository.findById(id);
  }

}

export default UserService;