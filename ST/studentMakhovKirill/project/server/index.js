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
});
server.get('/getBasket', (req, res) => {
	fs.readFile('./server/db/getBasket.json', 'utf-8', (err, data) => {
		if (!err) {
			res.json(JSON.parse(data));
		}
	})
});

server.listen(3000, () => { console.log('SERVER AT PORT 3000...') })