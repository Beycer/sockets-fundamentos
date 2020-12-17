const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const path = require('path');

//Hacer una pequeña configuracion aqui en el app de express para que trabaje 
//en base a un servidor que nosotros vamos a definir
//socket.io no trabaja directamente con esta aplicación de express
//pero si trabaja con un servidor http que ya trae por defecto Node
const app = express();
//definir el servidor para correr la aplicación
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

//midllerware para habilitar la carpeta public y que todo mundo pueda acceder a ella
app.use(express.static(publicPath));

//Inicializar socket io
//IO = esta es la comunicación del backend
module.exports.io = socketIo(server);
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});