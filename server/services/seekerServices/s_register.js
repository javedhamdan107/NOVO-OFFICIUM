import mongoose from 'mongoose';
import Seeker from '../../models/seeker.js';

export const seeker_register = async(req,res) => {
    const { skills, age, mobile_num, image } = req.body;

    const { id } = req.params;
    const values = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with given credentials!');

    
    const updatedSeeker = await Seeker.findOneAndUpdate(
        id,
        { skills, age, mobile_num, image },
        { upsert: false }
    );

    res.json(updatedSeeker);
}