let Team = require("../models/teamModel")

exports.list = function(req, res){
    Team.find((err,c) =>{
        return res.json(c)
    })
}


exports.show = function show(req, res) {
    Team.findById(req.params.id, (err,t)=>{
        return res.json(t);
    });
 }

exports.create = function (req, res){
    let team = new Team({
        name: req.body.name.trim(),
        topTeam: req.body.topTeam,
        size: req.body.size,
        coach:""
    })
    team.save().then(savedTeam =>{
        res.json(savedTeam);
    })
}

exports.update = function (req,res){
    Team.findByIdAndUpdate(req.body._id, req.body, (err, team)=>{
        return res.json(team);
    })
}
