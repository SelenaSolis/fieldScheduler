let Coach = require("../models/coaches")

exports.list = function(req, res){

}


exports.show = function (req, res) {
    // User.find({name: 'Selena'}, (err,u)=>{
    //     return res.json(u[0]);
    // });
}

exports.create = function (req, res){
    let user = new User({
        name: req.body.name,
        cart: []
    })
    user.save().then(savedUser =>{
        console.log(savedUser)
    })
}

exports.update = function (req,res){
    // User.findByIdAndUpdate(req.body._id, req.body, (err, user)=>{
    //     console.log(req.body._id)
    //     return res.json(user);
    // })
}
