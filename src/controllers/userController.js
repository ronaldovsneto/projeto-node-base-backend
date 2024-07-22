// src/controllers/userController.js

import UserService from '../services/userService.js';

const userService = new UserService(); 

const findAll = async (req, res) => {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

const findById = async (req, res) => {
  try {
    const user = await userService.findById(req.params.id); 
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
    const user = { name: name, email: email, password: password, nascimento: nascimento };
    const userCreated = await userService.create(user);
    res.status(201).json(userCreated); 
    
  } catch (error) {
    if (error.name === 'SequelizeValidationError') { 
      const validationErrors = error.errors.map(err => ({
        field: err.path,
        message: err.message,
      }));
      return res.status(400).json({ errors: validationErrors });
    } else {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
};

export { findAll, findById, create };

