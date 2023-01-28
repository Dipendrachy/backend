const express = require('express');
const router = express.Router();///function 
const {check,validationResult,} = require('express-validator');
const auth = require('../middleware/auth'); 
const upload = require('../middleware/uploads')


const hotelController = require('../controller/hotelController');
const hotelBooking = new hotelController();


router.post('/hotel/insert/:id',
     auth.verifyUser, auth.verifycustomer,
    hotelBooking.addHotel
    );

//deleting

router.delete('/hotel/delete/:hid',auth.verifyUser,  hotelBooking.deleteHotel);

//updating

router.put('/hotel/update',
auth.verifyUser, hotelBooking.updateHotel);

router.get('/hotel/showall', hotelBooking.showAllHotel);
router.get('/hotel/single/:id',  hotelBooking.getSingleHotel);

router.get('/hotel/showMyHotelBookings',auth.verifyUser, auth.verifycustomer,hotelBooking.showMyHotelBookings);

module.exports = router;