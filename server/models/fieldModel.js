const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fieldSchema = new Schema ({
    name: String,
    field: String,
    units: Number,
    lat: Number,
    lon: Number,
    availableTimes: {type: Schema.Types.Mixed, default: {} },
    schedule: {type: Schema.Types.Mixed, default: {} }
}, { minimize: false })

let Field = mongoose.model('Field', fieldSchema);

module.exports = Field;