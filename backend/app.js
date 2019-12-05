const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.port || 4000;
const bookings = require('./routes/bookings');

const Order = require('./models/Order');
const Message = require('./models/Message');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/bookings',bookings);

mongoose.connect(process.env.uri,{useNewUrlParser:true},()=>{console.log("Connected to MongoDB...");});

app.get('/',(req,res)=>{
    res.send("Hello world");
});

// Return Orders
app.get('/orders', async(req,res)=>{
    try{
        const orders = await Order.find();
        res.send(orders);
        console.log(orders);
    }
    catch(err){
        res.json({message:err});
        console.log(err);
    }
});

app.get('/contact', async (req,res)=>{
    try{
        const questions = await Message.find();
        res.send(questions);
        console.log(questions);
    }
    catch(err){
        res.json({message:err});
        console.log(err);
    }
});

app.post('/contact', async (req,res)=>{
    const message = new Message({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        question:req.body.question
    });
    try{
        const messageSaved = await message.save();
        res.send(messageSaved);
        console.log(messageSaved);
    }
    catch(err){
        res.json({message:err});
        console.log(err);
    }
});

app.listen(port,()=>{console.log(`Listening on port ${port}`)});