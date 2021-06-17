import Seeker from '../models/index.js';

export const getUserService = async () => {
  const user = await Seeker.find();
  return user;
};
