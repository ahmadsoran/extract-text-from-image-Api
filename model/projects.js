import mongoose from 'mongoose'

const projSchema = new mongoose.Schema({
    image: String,
    headerText: String,
    description: String,
    projectUrl: String,


})

export default mongoose.model('projects', projSchema);


