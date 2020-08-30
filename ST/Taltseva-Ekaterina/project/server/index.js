const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

server.get('/catalog', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if(!err) {
      res.json(JSON.parse(data));
    }
  })
});

server.get('/basket', (req, res) => {
  fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
    if(!err) {
      res.json(JSON.parse(data));
    }
  })
});


server.post("/basket", (req, res) => {
    let msgArr =[];
    fs.readFile("./server/db/basket.json", "utf-8", (err, data) => {
        if (!err) {
            msgArr = JSON.parse(data);
            msgArr.push(req.body);

            fs.writeFile("./server/db/basket.json", JSON.stringify(msgArr, null, '  '), err => {
                    if (!err) {
                        res.send("OK");
                    } else {
                        res.send("NO OK");
                    }
            });
        } else {
            res.send("basket read ");
        }
    })
});



server.listen(3000, () => {console.log('server at port 3000')})