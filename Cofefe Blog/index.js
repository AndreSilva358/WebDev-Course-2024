import express from "express";
import bodyParser from "body-parser";
  
const app = express();
const port = 3000;

app.use (bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get ("/about", (req, res) => {
    res.render("about.ejs");
  });
  
  app.get ("/posts", (req, res) => {
    res.render("posts.ejs");
  });

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});