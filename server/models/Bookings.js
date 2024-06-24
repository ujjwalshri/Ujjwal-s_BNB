const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
   place : {type: mongoose.Schema.Types.ObjectId, required:true}, 
   checkInTime : {type : Date , required:true},
   checkOutTime : {type :Date, required:true},
   name : {type:String , required:true},
   phone : {type:String, required:true},
   price: Number
})

const BookingsModel = mongoose.model('Bookings', bookingSchema);

module.exports = BookingsModel;