import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import UserRepository from '../repositories/userRepository.js';

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

  async findOne(condition) {
    return await this.userRepository.findOne(condition);
  }

  async login(email, password) {
    const user =  await this.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    return jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '1h' });
  }

}

export default UserService;