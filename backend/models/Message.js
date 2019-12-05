const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
    name: {
        type:String,
        required:true
    },
    email: String,
    phone: String,
    question: {
        type:String,
        required:true
    }
},
    {
        versionKey:false
    }
);

module.exports = mongoose.model("Message",MessageSchema)