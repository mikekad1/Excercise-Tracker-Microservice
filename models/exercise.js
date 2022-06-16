const mongoose = require('mongoose');
const moment = require('moment')
const Schema = mongoose.Schema;


const ExerciseSchema = new Schema(
    {
        description: { type: String, required: true },
        duration: { type: Number, required: true },
        date: { type: Date, default: Date.now },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    }
)

ExerciseSchema
    .virtual('date_formatted')
    .get(function () {
        return moment(this.date).format('ddd MMM DD YYYY');
    })

ExerciseSchema.set('toObject', { virtuals: true });
ExerciseSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Exercise', ExerciseSchema)