// src/controllers/userController.js

import User from '../models/user.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    const usersWithoutPass = users.map( user => {
      const {password, ...usersWithoutPass} = user.dataValues;
      return usersWithoutPass;
    });

    res.json(usersWithoutPass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId); 
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

const create = async (req, res) => {
  try {
    const { name, email, password, nascimento } = req.body;
    const hashedPassword = bcrypt.hash(password, process.env.SALT_ROUND);    
    
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      nascimento,
    });

    const { password: _, ...userWithoutPassword } = user.dataValues;
    res.status(201).json(userWithoutPassword); 
    
  } catch (error) {
    const validationErrors = error.errors.map(err => ({
      field: err.path,
      message: err.message,
    }));
    return res.status(400).json({ errors: validationErrors });
  }
  console.error(error);
  res.status(500).json({ error: 'Erro ao criar usuário' });
};

export { getAllUsers, getUserById, create };

