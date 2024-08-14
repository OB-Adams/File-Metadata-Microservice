const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(fileupload({ createParentPath: true }));
app.use(express.static(process.cwd() + "/public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.post("/api/fileanalyse", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.json({ msg: "no file selected" });
  }
  const file = req.files.upfile;
  const metadata = {
    name: file.name,
    type: file.mimetype,
    size: file.size,
  };
  console.log(process.cwd() + "/public/index.html");
  console.log(metadata);
  res.json(metadata);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
