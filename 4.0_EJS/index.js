import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    const today = new Date();
    let day = today.getDay();

    let date = "a weekday"
    const comment = "time to work hard ye scallywag."
    
    if (day === 0 || day === 6 ) {
     date = "the weekend!"
     comment = "happy resting sailor!"
    }

    res.render("index.ejs",
    { dateType: date, 
      comment: comment,
    });
});
    

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });