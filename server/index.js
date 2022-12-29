const express = require('express');
const http = require('http'); // http is a webserver "instance".
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {Server} = require('socket.io'); // Server is a socket.io server.
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// express.json() parses incoming JSON object requests and places the data in req.body.
app.use(express.json());
// express.urlencoded parses incoming urlencoded payload requests (e.g. strings or arrays).
// {extended: false} signifies the req.body object will only contain strings.
app.use(express.urlencoded({extended: false}));
// cors allows the express server to respond to preflight requests.
// A preflight request is sent before an actual request to see which actual requests the express server accepts.
// {credentials: true} allows all requests from the origins.
app.use(cors({credentials: true, origins: 'http://localhost:5000'}));

app.use('/users', require('./routes/userRoute'));

const server = http.createServer(app); // server is an HTTP server object that can listen to ports on your computer and execute the app function each time a request is made.

const io = new Server(server); // io is a new instance of socket.io with server passed to it.

// Listens on the connection event for incoming sockets.
io.on('connection', socket => {
	console.log('A user connected'.white.bgMagenta.italic);

	// Listens on the disconnect event for client disconnects.
	socket.on('disconnect', () => {
		console.log('A user disconnected'.magenta.bgWhite.italic);
	});
});

server.listen(port, () => console.log(`Server started on port ${port}`.black.bgCyan.italic));
