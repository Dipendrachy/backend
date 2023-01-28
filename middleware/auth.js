const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports.verifyUser = function (req, res, next) {
   
    const token = req.headers.authorization.split(" ")[1];
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const userVerify = jwt.verify(token, 'secretkey');
        // const token = req.headers.authorization.split(" ")[1];
        // console.log(token);
        // const userVerify = jwt.verify(token, 'secretkey');
        User.findOne({ _id: userVerify.userID })
            .then(function (result) {
                ///Success
                req.user = result;
                next();
            })
            .catch(function (err) {
                res.status(401).json({ message: err })
            });

    } catch (err) {
        res.status(401).json({ message: "Access has been Unauthorized!!" })
    }

};

///second gaurd done

module.exports.verifyAdmin = function (req, res, next) {
    if (!req.user) {
        return res.status(402).json({ message: "Unauthorized admin!!" });
    }
    else if (req.user.role !== 'Admin') {
        return res.status(401).json({ message: "Unauthorization admin 1" });
    }

    next();
}

module.exports.verifyCompany = function (req, res, next) {
    if (!req.user) {
        return res.status(402).json({ message: "Unauthorized admin company!!" });
    }
    else if (req.user.role !== 'Company') {
        return res.status(401).json({ message: "Unauthorization admin 1" });
    }

    next();
}

module.exports.verifycustomer = function (req, res, next) {
    if (!req.user) {
        return res.status(402).json({ message: "Unauthorized customer!!" });
    }
    else if (req.user.role !== 'Customer') {
        return res.status(401).json({ message: "Unauthorization Acess customer 1" });
    }

    next();
}