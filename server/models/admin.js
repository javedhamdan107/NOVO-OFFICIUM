import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    user_type: String,
})

export default mongoose.model("Admin", adminSchema);