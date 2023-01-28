const { mongo } = require("mongoose");
var User = require("./user")
const mongoose = require('mongoose')
const SCHEMA = mongoose.Schema;
const flightSchema = new SCHEMA({
    cname:{
        type: String,
        required: true
    },
    depature:{
        type: String,
        required: true        
    },
    arrival:{
        type: String,
        required: true,
    
    },
    duration:{
        type: String ,
        required: true
    },
    price:{
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true
    },
    creator: {
        type: SCHEMA.Types.ObjectId,
        ref: User,
    }
    
})

const addFlight = mongoose.model("addFlight", flightSchema)

module.exports = addFlight;