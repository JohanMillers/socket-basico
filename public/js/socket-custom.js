var socket = io();

socket.on('connect', function() {

    console.log('Conetado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexion con el Servidor');
    
});
//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Johan',
    mensaje: 'Hola Mundo'
},function(res){
    console.log(res);
    
});

//Escucha informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ',mensaje);
});
