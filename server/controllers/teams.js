let Team = require("../models/teamModel")

exports.list = function(req, res){
    Team.find((err,c) =>{
        return res.json(c)
    })
}


// exports.show = function (req, res) {
//     // User.find({name: 'Selena'}, (err,u)=>{
//     //     return res.json(u[0]);
//     // });
// }

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

// exports.update = function (req,res){
//     // User.findByIdAndUpdate(req.body._id, req.body, (err, user)=>{
//     //     console.log(req.body._id)
//     //     return res.json(user);
//     // })
// }
