import User from "../models/user.js";

class UserRepository {

  async create (user) {
    return await User.create(user);
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findAll() {
    return await User.findAll();
  }


}

export default UserRepository;