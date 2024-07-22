import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import config from '../config/config.js';
import { login } from '../controllers/loginController.js';

const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autentica um usuário e retorna um token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email do usuário
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário
 *     responses:
 *       200:
 *         description: Sucesso - Retorna um token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT
 *       401:
 *         description: Não autorizado - Credenciais inválidas
 */
router.post('/', login);

export default router;