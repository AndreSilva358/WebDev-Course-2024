import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.post("/submit", (req, res) => {
const lengthName = req.body["fName"].length+req.body["fName"].length;
  res.render("index.ejs", {numberOfLetters: lengthName});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
