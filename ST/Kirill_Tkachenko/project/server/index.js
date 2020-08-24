const express = require("express");
const fs = require("fs");

const server = express();
server.use(express.json());

server.get("/catalog", (req, res) => {
    fs.readFile("./server/db/catalog.json", "utf-8", (err, data) => {
        if (!err) {
            res.json(JSON.parse(data));
        }
    })
});

server.get("/basket", (req, res) => {
    fs.readFile("./server/db/basket.json", "utf-8", (err, data) => {
        if (!err) {
            res.json(JSON.parse(data));
        }
    })
});

server.post("/basket", (req, res) => {
    fs.writeFile("./server/db/basket.json", JSON.stringify(req.body, null, "    "), err => {
        if (!err) {
            res.send("200 OK");
        } else {
            res.send("500 basket server update failed");
        }
    })
});


server.listen(3000);