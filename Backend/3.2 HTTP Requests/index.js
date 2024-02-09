import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Sal-u-tations!");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><br><p>You can contact me at:andresilvaesilva099@gmail.com</p>");
})

app.listen(port, () => {
    console.log(`Server has been started on port ${port}.`);
});