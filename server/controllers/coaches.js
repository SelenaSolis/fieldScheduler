let Coach = require("../models/coachModel");
let Team = require("../models/teamModel");

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
    let teams = [];
    teams.push(Team.findOne({coachId: req.body._id}))
    console.log(teams)
    req.body.teams = teams
    Coach.findByIdAndUpdate(req.body._id, req.body, (err, coach)=>{
        return res.json(coach);
    })
}
