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
    fs.readFile("./server/db/basket.json", "utf-8", (err, data) => {
        if (!err) {
            let items = JSON.parse(data);
            items.push(req.body);
            fs.writeFile("./server/db/basket.json", JSON.stringify(items, null, "    "), err => {
                if (!err) {
                    res.status(200).send("OK");
                } else {
                    res.status(500).send("basket update failed");
                }
            });
        } else {
            res.status(500).send("basket db read failed");
        }
    })
});

server.put("/basket", (req, res) => {
    fs.readFile("./server/db/basket.json", "utf-8", (err, data) => {
        if (!err) {
            let items = JSON.parse(data);
            let item = req.body;
            let find = items.find(el => el.id == item.id);
            find.amount = item.amount;
            fs.writeFile("./server/db/basket.json", JSON.stringify(items, null, "    "), err => {
                if (!err) {
                    res.status(200).send("OK");
                } else {
                    res.status(500).send("basket item update failed");
                }
            });
        } else {
            res.status(500).send("basket db read failed");
        }
    })
});

server.delete("/basket", (req, res) => {
    fs.readFile("./server/db/basket.json", "utf-8", (err, data) => {
        if (!err) {
            let items = JSON.parse(data);
            let item = req.body;
            let find = items.find(el => el.id == item.id);
            items.splice(items.indexOf(find), 1);
            fs.writeFile("./server/db/basket.json", JSON.stringify(items, null, "    "), err => {
                if (!err) {
                    res.status(200).send("OK");
                } else {
                    res.status(500).send("basket item delete failed");
                }
            });
        } else {
            res.status(500).send("basket db read failed");
        }
    })
});


server.listen(3000);