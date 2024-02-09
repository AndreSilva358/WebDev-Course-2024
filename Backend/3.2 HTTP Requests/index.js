import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Sal-u-tations!");
})

app.listen(port, () => {
    console.log(`Server has been started on port ${port}.`);
});