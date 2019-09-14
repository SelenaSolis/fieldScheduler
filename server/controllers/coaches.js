let Coach = require("../models/coachModel")

exports.list = function(req, res){
    Coach.find((err,c) =>{
        return res.json(c)
    })
}


exports.show = function (req, res) {
    // User.find({name: 'Selena'}, (err,u)=>{
    //     return res.json(u[0]);
    // });
}

exports.create = function (req, res){
    let coach = new Coach({
        fName: req.body.fName,
        lName: req.body.lName,
        teams: [],
        unavailableTimes:{},
        schedule:{}
    })
    coach.save().then(savedCoach =>{
        console.log(savedCoach)
    })
}

exports.update = function (req,res){
    // User.findByIdAndUpdate(req.body._id, req.body, (err, user)=>{
    //     console.log(req.body._id)
    //     return res.json(user);
    // })
}
