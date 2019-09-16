const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coachSchema = new Schema ({
    fName: String,
    lName: String,
    teams:[],
    unavailableTimes:{type: Schema.Types.Mixed, default: {} },
    schedule:{type: Schema.Types.Mixed, default: {} }
}, { minimize: false })

let Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;