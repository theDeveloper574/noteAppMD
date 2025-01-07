const express = require("express");
const router = express.Router();
const Note = require("./../models/Note");


router.get(("/allnotes"), async function (req, res) {
    var notes = await Note.find();
    res.json(notes);
});

router.post(("/list"), async function (req, res) {
    var notes = await Note.find({ userId: req.body.userId });
    res.json(notes);
});

router.post(("/add"), async function (req, res) {
    await Note.deleteOne({ id: req.body.id });
    // await res.json(req.body);
    const newNote = new Note({
        id: req.body.id,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
    });
    await newNote.save();

    const message = { message: "New note created" + `id ${req.body.id} user: ${req.body.userId}` };
    res.json(message);
    // res.send("Page route for notes updated notes");
});

router.post("/delete", async function (req, res) {
    await Note.deleteOne({ id: req.body.id });
    const message = { message: "Note deleted" + `id ${req.body.id}` };
    res.json(message);
});

module.exports = router;