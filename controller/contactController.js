const Contact = require('../models/contactmodel');

class contactController {


    addContact(req, res) {
        const userid = req.user;
        const query = req.body.query;


        const cdata = new Contact({ userid: userid, query: query });
        cdata.save()
            .then(function (result) {
                res.status(201).json({ message: "Query has been Added Sucessfully" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    }

    deleteQuery(req, res) {
        const pid = req.params.pid;
        Contact.deleteOne({ _id: pid })
            .then(function (result) {
                res.status(200).json({ message: " query has been Delected sucessfully" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }

    showAllContact(req, res) {
       
        Contact.find().populate('userid')
            .then(function (data) {
                res.status(200).json({ success: true, data: data });
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }

    


}
module.exports = contactController