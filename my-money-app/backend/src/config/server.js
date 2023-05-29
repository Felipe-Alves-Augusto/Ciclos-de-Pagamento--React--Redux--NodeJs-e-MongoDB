const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const routes = require('../router/routes');
const cors = require('cors');


server.use(cors());
server.use(bodyParser.json());
server.use('/api',routes);
server.use(bodyParser.urlencoded({ extended: true }));




server.listen(port, () => {
    console.log('Back-end está rodando');
})
