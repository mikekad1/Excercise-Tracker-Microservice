const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        log: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
    }
)

UserSchema
    .virtual('count')
    .get(function () {
        return this.log.length;
    })

module.exports = mongoose.model('User', UserSchema)