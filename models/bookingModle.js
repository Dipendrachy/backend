var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const User = require('./user')
const bookFlight = require('./addFlightModels')


BookingSchema = new Schema({
    userid: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    bookingid: {
        type: Schema.Types.ObjectId,
        ref: bookFlight
    }

});
booking = mongoose.model('booking', BookingSchema);

module.exports = booking;