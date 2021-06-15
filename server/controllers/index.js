import mongoose from 'mongoose';
import Seeker from '../models/index.js';

import {get_user} from '../services/index.js';

export const getUser = async (req, res) => {
    try {

        const Users = await get_user();

        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}