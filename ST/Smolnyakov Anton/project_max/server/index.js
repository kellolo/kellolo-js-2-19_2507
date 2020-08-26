const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

// server.get('/catalog', (req, res) => {
//     fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
//         if (!err) {
//             res.json(JSON.parse(data));
//         }
//     })
// })

//когда проект полностью готов
server.use('/', express.static('server/public'));
//когда проект полностью готов

server.listen(3000, () => { console.log('SERVER AT PORT 3000...') })