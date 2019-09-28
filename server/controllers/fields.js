let Field = require("../models/fieldModel")

exports.list = function(req, res){
    Field.find((err,f) =>{
        return res.json(f)
    })
}


exports.show = function (req, res) {
    // User.find({name: 'Selena'}, (err,u)=>{
    //     return res.json(u[0]);
    // });
}

exports.create = function (req, res){
    // let coach = new Coach({
    //     fName: req.body.fName.trim(),
    //     lName: req.body.lName.trim(),
    //     teams: [],
    //     unavailableTimes:{},
    //     schedule:{}
    // })
    // coach.save().then(savedCoach =>{
    //     res.json(savedCoach);
    // })
}

exports.update = function update(req,res){
    console.log(req.body)
    Field.findByIdAndUpdate(req.body._id, req.body, (err, field)=>{
        console.log(req.body._id);
        return res.json(field);
    })
}
