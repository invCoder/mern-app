const express = require("express");

const router = express.Router();
const Note = require('../models/Note');

//create a new note
router.post('/notes', async (req, res) => {
    try {
        const {title, description} = req.body;
        const newNote = new Note({ title, description});
        const saveNote = await newNote.save();
        res.json(saveNote);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

// create get route for all notes
router.get('/notes', async (req , res )=> {
    try {
        const notes = await Note.find();
        res.json(notes);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


//define home route here
router.get('/', (req,res,next)=>{
    res.send('you are on api.');
})


module.exports = router;