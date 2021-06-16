import Seeker from '../models/index.js';

export const getUserService = async () => {
    const User = await Seeker.find();
    return User;
};
