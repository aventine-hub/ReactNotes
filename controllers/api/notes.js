const Note = require('../../models/note');


module.exports = {
    index,
};

async function index(req, res) {
    try {
        const notes = await Note.find({});
        res.status(200).json(notes);
    } catch (err) {
        res.status(404).json(err)
    }
}