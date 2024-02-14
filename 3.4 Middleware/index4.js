import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let bandName = "";

function bandNameGenerator (req, res, next) {
 console.log(req.body);
 bandName = req.body["street"] + req.body["pet"]; //had some difficulty in figuring this out initially]
 next();
}

app.use (bodyParser.urlencoded({extended:true}))

app.use (bandNameGenerator)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
