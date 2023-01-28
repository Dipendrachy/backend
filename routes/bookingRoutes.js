const express = require('express');
const router = express.Router();///function 
const {check,validationResult,} = require('express-validator');
const auth = require('../middleware/auth'); 
const bookingController = require('../controller/bookingController');
const booking = new bookingController();


// router.post('/packages/insert',auth.verifyUser,auth.verifyAdmin, upload.single('pimage'),packages.addpackages);
router.post('/booking/insert/:id',
    
    auth.verifyUser,auth.verifycustomer,booking.addBooking
);


//deleting

router.delete('/booking/delete/:bid',auth.verifyUser,  booking.deleteBooking)

//updating

router.put('/booking/update',
auth.verifyUser, booking.updateBooking);

router.get('/booking/showall', booking.showAllBooking)
router.get('/booking/single/:id',  booking.getSingleBooking)


router.get('/booking/showMyBookings',auth.verifyUser,booking.showMyBookings)



module.exports = router;