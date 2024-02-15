import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));//
let userAuthenticated = false;

app.use (bodyParser.urlencoded({extended:true}))//

function passwordChecker (req, res, next) {
   let password = req.body["password"];
   if (password === req.body["password"]) {
      userAuthenticated = true;
   }
   next();
}

app.use (passwordChecker);

app.get ("/", (req, res) => {
     res.sendFile(__dirname + "/public/index.html");
    })
    
 app.post ("/check", (req, res) => {
    if (userAuthenticated = true) {
      res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
     console.log(`Server has been started on port ${port}.`);
    });