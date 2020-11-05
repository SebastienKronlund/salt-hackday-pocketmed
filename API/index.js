const express = require('express');
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 1337

app.use(cors());

app.get('/', (req, res) => res.send("Hello World!"));

app.get("/users", (req, res) => {    
    fs.readFile("./data/data.json", "utf8", (err, jsonData) => {
        
        try {
            const data = JSON.parse(jsonData);
            res.send(data);
        } catch (err) {
            console.log(err);
        }
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`))