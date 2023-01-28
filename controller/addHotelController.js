const addHotel = require('../models/addHotelModels');

class addHotelController {

    addHotel(req, res) {
        if (req.file == undefined) {

            return res.status()
        }
        const path = req.file.path
        const hname = req.body.hname;
        const description = req.body.description;
        const hprice = req.body.hprice;

        const bdata = new addHotel({ himage: path, hname: hname, description: description, hprice: hprice });
        bdata.save()
            .then(function (result) {
                res.status(201).json({ message: "Sucessfully Added !!!" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    }


    deleteHotel(req, res) {
        const bid = req.params.bid;
        addHotel.deleteOne({ _id: bid })
            .then(function (result) {
                res.status(200).json({ message: "Sucessfully Deleted !!!" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }

    updateHotel(req, res) {
        const hname = req.body.hname;
        const description = req.body.description;
        const hprice = req.body.hprice;
        const id = req.body.id;
        console.log(req.body)
        addHotel.updateOne({ _id: id }, {hname: hname, description: description, hprice: hprice })

            .then(function (result) {
                res.status(200).json({ message: "Sucessfully Updated !!!" })
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            })

    }


    showAllHotel(req, res) {
        console.log("Hello")
        addHotel.find()
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    getSingleHotel(req, res) {
        const id = req.params.id;
        addHotel.findOne({ _id: id })
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }
}

module.exports = addHotelController