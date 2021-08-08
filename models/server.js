require('dotenv').config();
const express = require('express');
const cors = require('cors')
const routes = require('../routes/home')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.homeRoute = '/home';
    }

    middlerwares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

   routes() { 
      this.app.use(this.homeRoute, routes)
   }

   listen() { 
      this.app.listen(this.port, () => {
         console.log(`Server running on http://localhost:${this.port}`)
     })
   }
}

module.exports = Server;
