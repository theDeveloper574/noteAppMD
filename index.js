const express = require("express");

const app = express();

const mongoose = require("mongoose");
const Note = require("./models/Note");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
mongoose.connect("mongodb+srv://worknf00:rrr1234@cluster0.8tarv.mongodb.net/notesdb").then(function () {

    app.get(("/"), function (req, res) {
        const message = { message: "Api works!" };
        res.json({ message: "APi WOrkds redeploy checks!" });
    });

    const noteRounter = require("./routes/Note");
    app.use("/api", noteRounter);

});
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server stared PORT: " + 500);
});


