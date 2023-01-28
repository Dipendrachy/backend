const express = require('express');
const router = express.Router();///function 
const {check,validationResult,} = require('express-validator');
const auth = require('../middleware/auth'); 
const upload = require('../middleware/uploads')


const addHotelController = require('../controller/addHotelController');
const addHotel = new addHotelController();


// router.post('/packages/insert',auth.verifyUser,auth.verifyAdmin, upload.single('pimage'),packages.addpackages);
router.post('/addHotel/insert',[  
    check('himage',"You must fill this form.").not().isEmpty(),
    check('hname',"You must fill this form.").not().isEmpty(),
    check('description',"You must fill this form.").not().isEmpty(),
    check('hprice',"You must fill this form.").not().isEmpty(),
    ], upload.single('himage'), auth.verifyUser,auth.verifyCompany,
    addHotel.addHotel
    );


//deleting

router.delete('/addHotel/delete/:bid',auth.verifyUser, auth.verifyCompany, addHotel.deleteHotel)

//updating

router.put('/addHotel/update/:id',auth.verifyUser, auth.verifyCompany, addHotel.updateHotel);


router.get('/addHotel/showall', addHotel.showAllHotel)
router.get('/addHotel/single/:id',  addHotel.getSingleHotel)
module.exports = router;