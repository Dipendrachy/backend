const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');
const {check,validationResult} = require('express-validator');
const auth = require('../middleware/auth'); 
const contact = new contactController();

router.post('/contact', 
[  
check('useid',"userid must not be null").not().isEmpty(), 
check('query',"bookingid must not be null").not().isEmpty()], 
    auth.verifyUser,
contact.addContact);

router.delete('/contact/delete/:pid',auth.verifyUser,contact.deleteQuery)
router.get('/contact/showall/',auth.verifyUser, contact.showAllContact)

module.exports = router;
