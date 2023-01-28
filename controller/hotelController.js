const hotel = require('../models/hotelModels');

class HotelController {

    addHotel(req, res) {
       const userid = req.user;
       const hotelid = req.params.id;

        const hdata = new hotel({ userid: userid, hotelid: hotelid});
        hdata.save()
            .then(function (result) {
                res.status(201).json({ message: "Hotel has been Booked Sucessfully!!!" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    }

    deleteHotel(req, res) {
        const hid = req.params.hid;
        hotel.deleteOne({ _id: hid })
            .then(function (result) {
                res.status(200).json({ message: " Hotel Booking has been Deleted sucessfully" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }

    updateHotel(req, res) {
        const hotelName = req.body.hotelName;
        const CheckIn = req.body.CheckIn;
        const CheckOut = req.body.CheckOut;
        const NoPersonRoom = req.body.NoPersonRoom;
        const id = req.body._id;
        console.log(req.body)
        hotel.updateOne({ _id: id }, { hotelName: hotelName, CheckIn: CheckIn, CheckOut: CheckOut, NoPersonRoom: NoPersonRoom })

            .then(function (result) {
                res.status(200).json({ message: "Hotel Booking  updated sucessfully" })
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            })

    }


    showAllHotel(req, res) {
        hotel.find().populate("userid").populate("hoteid")
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    getSingleHotel(req, res) {
        const id = req.params.id;
        hotel.findOne({ _id: id })
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    showMyHotelBookings(req, res) {
        const userid = req.user;
        booking
            .find({
                userid: userid,
            })
            .populate("hotelid")
            .then(function (data) {
                res.status(200).json(data);
               
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            });
    }

}

module.exports = HotelController