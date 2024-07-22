import User from "../models/user.js";

class UserRepository {

  async create (user) {
    return await User.create(user);
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findAll() {
    return await User.findAll();
  }

  async findOne(condition) {
    return await User.findOne(condition);
  }


}

export default UserRepository;