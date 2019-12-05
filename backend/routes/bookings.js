const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Booking = require('../models/Booking');
// const Moment = require('momentjs');

// const monthNames = [
//     "January", "February", "March",
//     "April", "May", "June", "July",
//     "August", "September", "October",
//     "November", "December"
//  ]
// Return Bookings
// {"date":(date.getDate(),monthNames(date.getMonth()),date.getFullYear())}
// date:date.toDateString()
router.get('/', async (req,res)=>{
    try{
        const bookings = await Booking.find();
        res.send(bookings);
        console.log(bookings);
    }
    catch(err){
        res.json(err);
        console.log(err);
    }
});

// Return Bookings and Order Details for all
router.get('/all', async (req,res)=>{
    try{
        const query = await Booking.find().populate('order');
        res.send(query);
        console.log(query);
    }
    catch(err){
        res.json(err);
        console.log(err);
    }
});

// Return specific booking + order details
router.get('/:name', async (req,res) =>{
    try{
        const booking = await Booking.find({"name":req.params.name}).populate('order');
        res.send(booking);
        console.log(booking);
    }
    catch(err){
        res.json(err);
        console.log(err);
    }
})

// Insert booking
router.post('/', async (req,res)=>{
    const booking = new Booking({
        date:req.body.date,
        name:req.body.name,
        contact:req.body.contact,
        order:req.body.order
    });
    try{
        const bookingSaved = await booking.save();
        res.send(bookingSaved);
        console.log(bookingSaved);
    }
    catch(err){
        res.json({message:err});
        console.log(err);
    }
});

// Insert order
router.post('/order', async (req,res)=>{
    const order = new Order({
        ordername:req.body.ordername,
        materials:req.body.materials,
        price:req.body.price
    });
    try{
        const orderSaved = await order.save();
        res.send(orderSaved);
        console.log(orderSaved);
    }
    catch(err){
        res.json({message:err});
        console.log(err);
    }
});

// Update booking order
router.patch('/order/:name',async (req,res)=>{
    try{    
        const query = await Booking.findOneAndUpdate({name:req.params.name},options = {upsert:true},{$set:{order:req.body.order}});
        console.log(query);
    }
    catch(err){
        res.json({message:err});
        console.log(err);
    }
})

module.exports = router;