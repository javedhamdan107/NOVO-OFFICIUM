import mongoose from 'mongoose';

const providerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    description: String,
    jobs_provided: [String],
    mobile_num: String,
    image: String,
    user_type: String,
    website: String,
    address: String,
    review: {
        reviewer_id: String,
        reviewer_name: String,
        review_data: String,
        rating: Number,
    }
})

export default mongoose.model("Provider", providerSchema);