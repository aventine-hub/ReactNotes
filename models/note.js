var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    textContent: { type: String, default: 'Write away..' },
    complete: { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);