const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title : { type: String, require: true},
    description: { type: String, require: true},
});

const Note = mongoose.model('Note' , noteSchema);

module.exports = Note;
