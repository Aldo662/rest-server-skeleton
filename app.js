const Server = require('./models/server');
const server = new Server();

server.middlerwares();
server.routes();
server.listen();


