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
        fName: req.body.fName.trim(),
        lName: req.body.lName.trim(),
        teams: [],
        unavailableTimes:{},
        schedule:{}
    })
    coach.save().then(savedCoach =>{
        res.json(savedCoach);
    })
}

exports.update = function (req,res){
    Coach.findByIdAndUpdate(req.body._id, req.body, (err, coach)=>{
        return res.json(coach);
    })
}
