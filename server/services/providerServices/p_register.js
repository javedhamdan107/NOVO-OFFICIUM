import mongoose from 'mongoose';
import Provider from '../../models/provider.js';

export const provider_register = async(req,res) => {
    const { description, mobile_num, image, website, address } = req.body;

    const { id } = req.params;
    const values = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with given credentials!');

    
    const updatedProvider = await Provider.findOneAndUpdate(
        id,
        { description, mobile_num, image, website, address },
        { upsert: false }
    );

    res.json(updatedProvider);
}