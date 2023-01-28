const express = require('express');
const router = express.Router();///function 
const {check,validationResult,} = require('express-validator');
const auth = require('../middleware/auth'); 
const upload = require('../middleware/uploads')


const addFlightController = require('../controller/addFlightController');
const addFlight = new addFlightController();


// router.post('/packages/insert',auth.verifyUser,auth.verifyAdmin, upload.single('pimage'),packages.addpackages);
router.post('/addFlight/insert',[  
    check('cname',"You must fill this form.").not().isEmpty(),
    check('depature',"You must fill this form.").not().isEmpty(),
    check('arrival',"You must fill this form.").not().isEmpty(),
    check('duration',"You must fill this form.").not().isEmpty(),
    check('price',"You must fill this form.").not().isEmpty(),
    check('image',"You must fill this form.").not().isEmpty(),
    ], upload.single('image'), auth.verifyUser, auth.verifyCompany,
    addFlight.addForm
    );


//deleting

router.delete('/addFlight/delete/:bid', auth.verifyUser, auth.verifyCompany, addFlight.deleteForm)

//updating

router.put('/addFlight/update/:id', auth.verifyUser, auth.verifyCompany, addFlight.updateForm);


router.get('/addFlight/showall', addFlight.showAllForm)
router.get('/addFlight/single/:id',  addFlight.getSingleForm)

//for android getting single value
router.get('/addFlight/singles/:id',  addFlight.getSingleForms)
module.exports = router;