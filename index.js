const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const cors = require("cors");

app.use(cors({ optionSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(`${__dirname}/views/index.html`));


app.post("/api/upload", upload.single("upfile"), (req, res) => {
    console.log(req.file);
  if (!req.file) return res.json({ error: "Select a file to upload" });

  const { originalname, mimetype, size } = req.file;

  res.json({ name: originalname, type: mimetype, size: size });
});

var listener = app.listen(process.env.PORT || 5500, function () {
    console.log("Your app is listening on port " + listener.address().port);
  });
  
  