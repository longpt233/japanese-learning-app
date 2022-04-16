import express from 'express';
import {register} from '../controllers/auth.controller.js';
import {validatorRegister} from '../middleware/validator.js';

const authRoutes = express.Router();

authRoutes.post('/api/v1/register', validatorRegister, register)

export default authRoutes;