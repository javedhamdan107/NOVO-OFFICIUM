import express from 'express';

import { seeker_registration } from '../controllers/seeker.js';

const router = express.Router();

router.post('/:id/seeker_register', seeker_registration);

export default router;