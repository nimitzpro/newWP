// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Order = require('./Order');
// this will be our data base's data structure 
const BookingSchema = new Schema(
  {
    date:{
      type:Date,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    contact:{
      type:String,
      required:true
    },
    order:{type:Schema.Types.ObjectId, ref:'Order'}
  },
  {
    versionKey:false
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Booking", BookingSchema);