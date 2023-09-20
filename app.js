const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({message: "This is a contactbook app built with MEVN stack."});
});
module.exports = app;