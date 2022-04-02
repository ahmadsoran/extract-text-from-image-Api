import mongoose  from "mongoose";
const userLikedSchema = new mongoose.Schema({
  like: []
})

export default mongoose.model('UserLiked' , userLikedSchema)