import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Provider from '../../models/provider.js';
import Admin from '../../models/admin.js';
import Seeker from '../../models/seeker.js';

export const signin = async(req,res) => {
    const { user_type, email, password } = req.body;

    try {

            if(user_type === "seeker"){
                const existingUser = await Seeker.findOne({ email });

                if(!existingUser) return res.status(404).json({message: "User doesn't exist!"});

                const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

                if(!isPasswordCorrect) return res.status(400).json({message:"Invalid Credentials!"});

                const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

                res.status(200).json({result: existingUser, token});

            }else if(user_type === "provider"){

                const existingUser = await Provider.findOne({ email });

                if(!existingUser) return res.status(404).json({message: "User doesn't exist!"});

                const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

                if(!isPasswordCorrect) return res.status(400).json({message:"Invalid Credentials!"});

                const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

                res.status(200).json({result: existingUser, token});

            }else if(user_type === "admin"){

                const existingUser = await Admin.findOne({ email });

                if(!existingUser) return res.status(404).json({message: "User doesn't exist!"});

                const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

                if(!isPasswordCorrect) return res.status(400).json({message:"Invalid Credentials!"});

                const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

                res.status(200).json({result: existingUser, token});

            }

        
    } catch (error) {
        res.status(500).json({message: "Something went wrong!"})
    }



}
