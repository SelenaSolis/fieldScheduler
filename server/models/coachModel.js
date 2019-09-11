const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coachSchema = new Schema ({
    name: String,
    teams:[],
    unavailableTimes:{},
    schedule:{}
})

let Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;