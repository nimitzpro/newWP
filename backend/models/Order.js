const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
    ordername:{
        type:String
        // required:true
    },
    materials:String,
    price:{
        type:String,
        default:"Unknown",
        required:true
    }
},
    {
        versionKey:false
    }
);

module.exports = mongoose.model("Order",OrderSchema);