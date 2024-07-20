import mongoose from "mongoose";


const LikeSchema = new mongoose.Schema({
    comment:{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    video:{
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    likedBy:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    tweet:{
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    }

},{timestamps: true})

const Like = mongoose.model("Like", LikeSchema)