import mongoose from 'mongoose';

const seekerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    skills: [String],
    jobs: [String],
    age: Number,
    mobile_num: String,
    image: String,
    user_type: String,
})

export default mongoose.model("Seeker", seekerSchema);