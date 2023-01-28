const User = require('../models/user')

class UserController{


    update(req, res){
        const username = req.body.username;
        const email = req.body.email;
        const phone = req.body.phone;
        
    
        const id = req.params.id;
        User.updateOne({_id:id},{username : username , email : email, phone : phone})
    
        .then(function(result){
            res.status(200).json({message: "User update sucessful" })
        })
        .catch(function(e){
            res.status(500).json({message : e});
        })
    
    }
    
    showAllUser(req, res){
        // console.log("Hello")
        User.find()
        .then(function(data){
            res.status(200).json({success:true,data:data});
        })
        .catch(function(e){
            res.status(500).json({message: e})
        })
    }

    getSingleUser(req, res){
        const id = req.params.id;
        User.findOne({_id : id})
        .then(function(data){
            res.status(200).json(data);
        })
        .catch(function(e){
            res.status(500).json({message: e})
        })
    }

    showProfile(req, res){
        const id = req.user;
        User.findOne({_id : id})
        .then(function(data){
            res.status(200).json({success: true, data: data});
        })
        .catch(function(e){
            res.status(500).json({message: e})
        })
    }
}

module.exports = UserController