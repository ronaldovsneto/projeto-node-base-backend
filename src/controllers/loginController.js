import UserService from '../services/userService.js';

const userService = new UserService(); 

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userService.login(email, password);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }

};

export { login };