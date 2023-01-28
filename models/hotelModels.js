const { mongo } = require("mongoose");
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const User = require('./user')
const hotelBooking = require('./addHotelModels')

HotelSchema = new Schema({


    userid: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    hotelid: {
        type: Schema.Types.ObjectId,
        ref: hotelBooking
    }

    
});

hotel = mongoose.model('hotel', HotelSchema);

module.exports = hotel;