// mongoose allows us to create models and schemas because mongoose alone is schemaless
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamp: true });

module.exports = mongoose.model('Workout', workoutSchema);