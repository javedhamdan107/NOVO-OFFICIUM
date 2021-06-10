import express from 'express';

import { provider_registration } from '../controllers/provider.js';

const router = express.Router();

router.post('/:id/provider_register', provider_registration);

export default router;