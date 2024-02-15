//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
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



app.get ("/", (req, res) => {
     res.sendFile(__dirname + "/public/index.html");
    })
    
 app.post ("/check", (req, res) => {
    password = req.body["password"];
});

app.listen(port, () => {
     console.log(`Server has been started on port ${port}.`);
    });