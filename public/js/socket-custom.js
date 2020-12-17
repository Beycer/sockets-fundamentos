//Aqui vamos a definir las funciones que queremos que se disparen 
//cuando resibamos información del servidor o cuando nosotros queramos enviar
//información al servidor

var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

//Cuando perdemos conexion con el servidor
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

//Emitir desde cliente - escuchar en el servidor
//emitir mensaje del cliente y que el servidor lo escuche
//Enviar información => emit y los on => escuchar información o sucesos
socket.emit('enviarMensaje', {
    usuario: 'Joel',
    mensaje: 'Hola Beycer'
}, function(resp) {//se va ejecutar cuando todo salga bien
    //console.log('Se disparó el callback');
    console.log('Respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});
