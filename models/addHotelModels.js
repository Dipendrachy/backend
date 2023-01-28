const { mongo } = require("mongoose");
var User = require("./user")
const mongoose = require('mongoose')
const SCHEMA = mongoose.Schema;

const hotelSchema = new SCHEMA({
    himage:{
        type: String,
        required: true
    },
    hname:{
        type: String,
        required: true        
    },
    description:{
        type: String,
        required: true,
    
    },
    hprice:{
        type: String,
        required: true
    },
    creator: {
        type: SCHEMA.Types.ObjectId,
        ref: User,
    }
})
const addHotel = mongoose.model('addHotel', hotelSchema)

module.exports = addHotel;