const express = require('express');
const { userInfo } = require('os');
const router = express.Router();///function 
const tokenVerification = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const authController = require('../controller/authController')
const userController = require('../controller/userController');

const user = new userController();
const auth = new authController();
const token = tokenVerification.verifyUser;

//register api
router.post('/user/add', [
    check('username', "You must enter your username").not().isEmpty(),
    check('password', "You must enter your password").not().isEmpty(),
    check('email', "Invalid Email!!!").isEmail(),
    check('phone', "Invalid Phone Number!!!").isMobilePhone(),
    check('password', "it must be 2 to 8 lenght long").isLength({ min: 2, max: 8 })],
    auth.register
);

///logIN done

router.post('/user/login', auth.login)

router.put('/user/update/:id', token, user.update)
router.get('/user/showall', user.showAllUser)
router.get('/user/single/:id', user.getSingleUser)
router.get('/user/showProfile',token, user.showProfile)


module.exports = router;