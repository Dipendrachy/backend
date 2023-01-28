const booking = require('../models/bookingModle');

class BookingController {

    addBooking(req, res) {
        const userid = req.user;
        const bookingid = req.params.id;


        const bdata = new booking({ userid: userid, bookingid: bookingid });
        bdata.save()
            .then(function (result) {
                res.status(201).json({success:true, message: "Booking Sucessful!!!" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    }


    deleteBooking(req, res) {
        const bid = req.params.bid;
        booking.deleteOne({ _id: bid })
            .then(function (result) {
                res.status(200).json({ message: " Booking Delete sucessful!!!" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }

    updateBooking(req, res) {
        const FullName = req.body.FullName;
        const StartDest = req.body.StartDest;
        const EndDest = req.body.EndDest;
        const CheckinDate = req.body.CheckinDate;
        const CheckoutDate = req.body.CheckoutDate;
        const NoPerson = req.body.NoPerson;
        const id = req.body._id;
        console.log(req.body)
        booking.updateOne({ _id: id }, { FullName: FullName, StartDest: StartDest, EndDest: EndDest, CheckinDate: CheckinDate, CheckoutDate: CheckoutDate, NoPerson: NoPerson })

            .then(function (result) {
                res.status(200).json({ message: "Booking Updated Sucessfull!!!" })
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            })

    }


    showAllBooking(req, res) {
        //  console.log("Hello")
        booking.find().populate("userid").populate("bookingid")
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    getSingleBooking(req, res) {
        const id = req.params.id;
        booking.findOne({ _id: id })
            .then(function (data) {
                res.status(200).json({success: true, data});
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }



    showMyBookings(req, res) {
        const userid = req.user._id;
        var arr = []
        booking
            .find({
                userid: userid,
            })
            .populate("bookingid")
            .then(function (data) {
                data.map(data=>{
                    arr.push({
                        _id: data._id,
                        cname: data.bookingid.cname,
                        depature: data.bookingid.depature,
                        arrival: data.bookingid.arrival,
                        duration: data.bookingid.duration,
                        image: data.bookingid.image
                    })       
                    
                })
                console.log(arr)
                res.status(200).json({success: true,  data: arr});
               
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            });
    }



}

module.exports = BookingController