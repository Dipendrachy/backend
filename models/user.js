const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SCHEMA = mongoose.Schema;
// add-user (Book flight)
const USERSCHEMA = new SCHEMA({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true        
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    role : {
        type: String,
        enum: ['Admin', 'Customer', 'Company'],
        default: 'Customer'
    },
    authTokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
})

USERSCHEMA.methods.generateAuthToken = async function () {
    const token = await jwt.sign({ id: this._id },  "secrectkey");
    this.authTokens = await this.authTokens.concat({ token });
    await this.save();
    return token;
};
const registration = mongoose.model('user', USERSCHEMA);


module.exports = registration;