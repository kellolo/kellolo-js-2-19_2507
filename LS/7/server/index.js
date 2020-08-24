const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

server.use('/', express.static('server/public'));

server.post('/message', (req, res) => {
    let msgArr = [];
    fs.readFile('./server/db/messages.json', 'utf-8', (err, data) => {
        if (!err) {
            msgArr = JSON.parse(data);
            msgArr.push(req.body);
            fs.writeFile('./server/db/messages.json', JSON.stringify(msgArr, null, ' '), err => {
                if (!err) {
                    res.send(`
                        <h1>Your message was sent</h1>
                        <a href="/'>Go to main page</a>
                    `)
                } else {
                    res.send(`
                        <h1>Error send message</h1>
                        <a href="/'>Go to main page</a>
                    `)
                }
            })
        }
    })
})

server.listen(3300, () => { console.log('SERVER AT PORT 3300...') })