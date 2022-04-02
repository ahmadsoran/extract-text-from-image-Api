import mongoose from "mongoose";
const Contact = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String,
    date: Date,
    budget: String,

})

export default mongoose.model('Contact', Contact)