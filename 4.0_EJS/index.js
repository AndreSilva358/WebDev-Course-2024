import express from "express";

const port = 3000;
const app = express();

app.get ("/", (req, res) => {
    const currentDay = new Date()
    const day = currentDay.getDay();
    
    let dateType = "a weekday";
    const comment = "time to work hard ye scallywag."

    if (day === 0 || day ===6) {
        dateType = "the weekend";
        comment = "time to get drinks and be marry sailor!";
    }

    res.render("index.ejs",
    { dateType: date, 
      comment: comment,
    });
});

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
