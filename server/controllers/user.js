import {signin} from '../services/userServices/signin.js';
import {signup} from '../services/userServices/signup.js';


export const signin_controller = async (req,res) => {
    

    try {
        signin(req,res);        
    } catch (error) {
        res.status(500).json({message: "Something went wrong!"})
    }
}

export const signup_controller = async (req,res) => {

    try {
        signup(req,res);     
    } catch (error) {
        res.status(500).json({message: "Something went wrong!"});
    }
}