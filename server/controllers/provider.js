import {provider_register} from '../services/providerServices/p_register.js';

export const provider_registration = async (req,res) => {
    try {
        provider_register(req,res);
    } catch (error) {
        console.log(error);
    }
}