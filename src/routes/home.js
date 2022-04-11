import { Router } from 'express';
import { getHome } from '../controllers/home.js';

const route = Router();

route.get('/', getHome);

export default route;
