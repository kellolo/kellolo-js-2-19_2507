const express = require('express');
const fs = require('fs');
const writer = require('./utils/writer.js');
const basket = require('./services/basket.js');

const server = express();
server.use(express.json());

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.json(JSON.parse(data));
        }
    })
})

server.post('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            let newBasket = basket.add(JSON.parse(data), req.body);
            writer('./server/db/basket.json', newBasket)
                .then(status => {
                    if (status) {
                        res.json({ status });
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})

server.put('/basket/:id', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            let newBasket = basket.change(JSON.parse(data), req.params.id, req.body.amount);
            writer('./server/db/basket.json', newBasket)
                .then(status => {
                    if (status) {
                        res.json({ status });
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})

server.delete('/basket/:id', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            let newBasket = basket.delete(JSON.parse(data), req.params.id);
            writer('./server/db/basket.json', newBasket)
                .then(status => {
                    if (status) {
                        res.json({ status });
                    } else {
                        res.sendStatus(500);
                    }
                })
        }
    })
})

server.listen(3000, () => { console.log('SERVER AT PORT 3000...') })