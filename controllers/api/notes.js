const Note = require('../../models/note');


module.exports = {
    index,
    create
};

async function index(req, res) {
    try {
        const notes = await Note.find({});
        res.status(200).json(notes);
    } catch (err) {
        res.status(404).json(err)
    }
}

async function create(req, res) {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (err) {
        res.status(404).json(err)
    }
}