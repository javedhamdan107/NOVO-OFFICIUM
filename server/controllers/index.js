import { getUserService } from '../services/index.js';

export const getUser = async (req, res) => {
  try {
    const users = await getUserService();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
