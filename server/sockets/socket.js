const { io } = require('../server');

//cuando un usuario se conecta al servidor
io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    //Usario desconectado
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Para que la informacion fluya a todos
        //todos los clientes esten conectados al servidor
        client.broadcast.emit('enviarMensaje', data);
/*
        if(mensaje.usuario){
            callback({
                resp: 'TODO SALIO BIEN!!'
            });
        }else{
            callback({
                resp: 'TODO SALIO MAL!!!!!!!!!!'
            });
        }

        //para decir que todo salio bien
        //callback();*/
    });







});