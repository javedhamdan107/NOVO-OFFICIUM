import express from 'express';

import { signin_controller, signup_controller } from '../controllers/user.js';


const router = express.Router();

router.post('/signin', signin_controller);
router.post('/signup', signup_controller);

export default router;