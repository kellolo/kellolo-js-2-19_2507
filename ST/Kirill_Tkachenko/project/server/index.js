const express = require("express");
const fs = require("fs");
const basket = require("./services/basket.js");

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
            res.status(200).json(JSON.parse(data));
        }
    })
});

server.post("/basket", (req, res) => {
    _basketUpdate(basket.add, "basket item add failed", req.body)
        .then(success => res.status(200).json(success))
        .catch(failure => res.status(500).json(failure));
});

server.put("/basket/:id/:amnt", (req, res) => {
    _basketUpdate(basket.change, "basket item update failed", req.params.id, req.params.amnt)
        .then(success => res.status(200).json(success))
        .catch(failure => res.status(500).json(failure));
});

server.delete("/basket/:id", (req, res) => {
    _basketUpdate(basket.delete, "basket item delete failed", req.params.id)
        .then(success => res.status(200).json(success))
        .catch(failure => res.status(500).json(failure));
});


function _basketUpdate(method, errMsg, ...methodParams) {
    return new Promise((resolve, reject) => {
        fs.readFile("./server/db/basket.json", "utf-8", (err, data) => {
            if (!err) {
                const updated = method(JSON.parse(data), ...methodParams);
                fs.writeFile("./server/db/basket.json", JSON.stringify(updated, null, "    "), err => {
                    if (!err) {
                        resolve({success: true});
                    } else {
                        reject({error: errMsg});
                    }
                });
            } else {
                reject({error: "basket db read failed"});
            }
        });
    });
}


server.listen(3000);