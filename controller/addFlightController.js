const addFlight = require('../models/addFlightModels');

class addFlightController {

    addForm(req, res) {
        if (req.file == undefined) {

            return res.status()
        }
        const cname = req.body.cname;
        const depature = req.body.depature;
        const arrival = req.body.arrival;
        const duration = req.body.duration;
        const price = req.body.price;
        const path = req.file.path;

        const bdata = new addFlight({ cname: cname, depature: depature, arrival: arrival, duration: duration, price: price, image: path });
        bdata.save()
            .then(function (result) {
                res.status(201).json({ success:true})
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    }


    deleteForm(req, res) {
        const bid = req.params.bid;
        addFlight.deleteOne({ _id: bid })
            .then(function (result) {
                res.status(200).json({ message: "Sucessfully Deleted !!!" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }

    updateForm(req, res) {
        const cname = req.body.cname;
        const depature = req.body.depature;
        const arrival = req.body.arrival;
        const duration = req.body.duration;
        const price = req.body.price;
        const id = req.body.id; 
        console.log(req.body)
        addFlight.updateOne({ _id: id }, { cname: cname, depature: depature, arrival: arrival, duration: duration, price: price })

            .then(function (result) {
                res.status(200).json({ message: "Sucessfully Updated !!!" })
            })
            .catch(function (e) {
                res.status(500).json({ message: e });
            })

    }


    showAllForm(req, res) {
        // console.log("Hello")
        addFlight.find()
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
                console.log(data.userid)
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    getSingleForm(req, res) {
        
        const id = req.params.id;
        addFlight.findOne({ _id: id })
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    //for android getting single data

    getSingleForms(req, res) {
        
        const id = req.params.id;
        addFlight.findOne({ _id: id })
            .then(function (data) {
                res.status(200).json({success:true,data:data});
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }
}

module.exports = addFlightController