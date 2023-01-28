var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user')


ContactsSchema = new Schema({

    userid: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    query:{
        type:String
    }
    
});
Contact = mongoose.model('contact', ContactsSchema);

module.exports = Contact;