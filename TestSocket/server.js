var app = require('express')();
var http = require('http').createServer(app);
const session = require('express-session');
var io = require('socket.io')(http);
var express = require('express');
var $ = require("jquery");
app.set("view engine", "hbs");


app.use(express.static('public'));

app.use(session({
    secret: 'ssshhhhh',
    saveUninitialized: true
}));

// load html 
app.get('/', function (req, res) {
    res.render("index");
});

io.on('connection', (socket) => {
    console.log("New user connected");
    socket.on('new_message', (data) => {
        io.sockets.emit('print_message', { message: data.message });
    });
});

var server = http.listen("3000", () => console.log("Server is running"));
