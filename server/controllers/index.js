import { getUserService } from '../services/index.js';

export const getUser = async (req, res) => {
    try {
        const Users = await getUserService();
        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
