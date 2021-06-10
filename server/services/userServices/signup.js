import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Provider from '../../models/provider.js';
import Admin from '../../models/admin.js';
import Seeker from '../../models/seeker.js';

export const signup = async (req,res) => {
    const { user_type, email, password, confirmPassword, firstName, lastName } = req.body;

    try {

            if(user_type === "seeker"){
                const existingUser = await Seeker.findOne({ email });

                if(existingUser) return res.status(404).json({message: "User already exists!"});

                if(password !== confirmPassword) return res.status(404).json({message: "Passwords dont't match"});

                const hashedPassword = await bcrypt.hash(password, 12);

                const result = await Seeker.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, user_type: `${userType}` });

                const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

                res.status(200).json({result, token});
                
            }else if(user_type === "provider"){

                const existingUser = await Provider.findOne({ email });

                if(existingUser) return res.status(404).json({message: "User already exists!"});

                if(password !== confirmPassword) return res.status(404).json({message: "Passwords dont't match"});

                const hashedPassword = await bcrypt.hash(password, 12);

                const result = await Provider.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, user_type: `${userType}` });

                const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

                res.status(200).json({result, token});

            }else if(user_type === "admin"){

                const existingUser = await Admin.findOne({ email });

                if(existingUser) return res.status(404).json({message: "User already exists!"});

                if(password !== confirmPassword) return res.status(404).json({message: "Passwords dont't match"});

                const hashedPassword = await bcrypt.hash(password, 12);

                const result = await Admin.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, user_type: `${userType}` });

                const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

                res.status(200).json({result, token});
            }
            
            
        
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong1!"});
    }
}