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
    let availTimesM = {}
    let availTimesT = {}
    let availTimesW = {}
    let availTimesTh = {}
    if(req.body.availableTimeStartM && req.body.availableTimeEndM){
        let startM = Number(req.body.availableTimeStartM) + 1200
        let endM = Number(req.body.availableTimeEndM) + 1200
        let timeM = startM;
        while (timeM < endM){
            availTimesM[`${timeM}`] = {}
            availTimesM[`${timeM}`].isBooked = false
            availTimesM[`${timeM}`].coachId = "";
            availTimesM[`${timeM}`].teamId = "";
            timeM += 15
            let timeStr = String(timeM)
            if(timeStr[timeStr.length-2] == '6'){
                timeM += 40;
            }
        }
    }
    if(req.body.availableTimeStartT && req.body.availableTimeEndT){
        let startT = Number(req.body.availableTimeStartT) + 1200
        let endT = Number(req.body.availableTimeEndT) + 1200
        let timeT = startT;
        while (timeT < endT){
            availTimesT[`${timeT}`] = {}
            availTimesT[`${timeT}`].isBooked = false
            availTimesT[`${timeT}`].coachId = "";
            availTimesT[`${timeT}`].teamId = "";
            timeT += 15
            let timeStr = String(timeT)
            if(timeStr[timeStr.length-2] == '6'){
                timeT += 40;
            }
        }
    }
    if(req.body.availableTimeStartW && req.body.availableTimeEndW){
        let startW = Number(req.body.availableTimeStartW) + 1200
        let endW = Number(req.body.availableTimeEndW) + 1200
        let timeW = startW;
        while (timeW < endW){
            availTimesW[`${timeW}`] = {}
            availTimesW[`${timeW}`].isBooked = false
            availTimesW[`${timeW}`].coachId = "";
            availTimesW[`${timeW}`].teamId = "";
            timeW += 15
            let timeStr = String(timeW)
            if(timeStr[timeStr.length-2] == '6'){
                timeW += 40;
            }
        }
    }
    if(req.body.availableTimeStartTh && req.body.availableTimeEndTh){
        let startTh = Number(req.body.availableTimeStartTh) + 1200
        let endTh = Number(req.body.availableTimeEndTh) + 1200
        let timeTh = startTh;
        while (timeTh < endTh){
            availTimesTh[`${timeTh}`] = {}
            availTimesTh[`${timeTh}`].isBooked = false
            availTimesTh[`${timeTh}`].coachId = "";
            availTimesTh[`${timeTh}`].teamId = "";
            timeTh += 15
            let timeStr = String(timeTh)
            if(timeStr[timeStr.length-2] == '6'){
                timeTh += 40;
            }
        }
    }

    let field = new Field({
        name: req.body.name.trim(),
        units: Number(req.body.units),
        teams: [],
        availTimesM: availTimesM,
        availTimesT: availTimesT,
        availTimesW: availTimesW,
        availTimesTh: availTimesTh,
        schedule:{
            m: {},
            t: {},
            w: {},
            th: {}
        }
    })
    field.save().then(savedField =>{
        res.json(savedField);
    })
}

exports.update = function update(req,res){
    console.log(req.body)
    Field.findByIdAndUpdate(req.body._id, req.body, (err, field)=>{
        console.log(req.body._id);
        return res.json(field);
    })
}
