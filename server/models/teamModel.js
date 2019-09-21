const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema ({
    name: String,
    topTeam: String,
    coach: String,
    practiceSch: [],
    size: String
})

let Team = mongoose.model('Team', teamSchema);

module.exports = Team;