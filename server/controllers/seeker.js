import {seeker_register} from '../services/seekerServices/s_register.js';

export const seeker_registration = async (req,res) => {
    try {
        seeker_register(req,res);
    } catch (error) {
        console.log(error);
    }
}