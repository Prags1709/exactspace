const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api", async (req, res)=>{
    let payload = req.body;
    try {
        res.status(200).send(payload);
    } catch (error) {
        console.log(error);
        res.send({
            "error" : error,
            "message": "something went wrong"
        })
    }
})

app.listen(3000, ()=>{
    console.log(`Server running on port ${port}`);
})