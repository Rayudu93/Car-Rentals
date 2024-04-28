const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    price:String,
    carName:String,
    PickUp:String,
    Return:String,
    fullname:String,
    email:String,
    address:String,
    phone: Number,
    payment:String,
});

const BookingData = mongoose.model("Booking Data", BookingSchema);

module.exports = BookingData;