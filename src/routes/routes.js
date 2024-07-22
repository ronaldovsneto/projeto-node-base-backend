import express from 'express';
import loginRoutes from './loginRouters.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API!!' });
});

router.use('/login', loginRoutes);
router.use('/user', userRoutes);

export default router;
