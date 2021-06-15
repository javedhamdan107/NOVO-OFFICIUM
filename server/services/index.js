import Seeker from '../models/index.js';

export const get_user = async () => {

    const User = await Seeker.find();
    return User;

}