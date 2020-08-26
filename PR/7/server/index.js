const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.json(JSON.parse(data));
        }
    })
})

// server.get('/', (req, res) => {
//     res.send(`<h1>HELLO SERVER</h1>
//                 <a href="/hello">Hello</a>`)
// })


// server.get('/hello', (req, res) => {
//     res.send(`<h1>HELLO</h1>
//                 <a href="/">Back</a>`)
// })

//когда проект полностью готов
// server.use('/', express.static('server/public'));
//когда проект полностью готов

server.listen(3000, () => { console.log('SERVER AT PORT 3000...') })