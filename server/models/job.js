import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    description : String,
    salary : Number,
    required_skills : [String],
    applicants : [String],
    selected : [String],
    hired : [String],
    designation : String,
    location : String,
    type : String,
    experience : String,
    provider_id : String,
})

export default mongoose.model("Job", jobSchema);