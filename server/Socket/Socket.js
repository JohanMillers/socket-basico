 const {io} = require('../server')

io.on('connection',client => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', ()=> {
        console.log('Usuario desconectado');
        
    });

    //Escuchar un Cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje',data);



        // callback();

        // if(mensaje.usuario) {
        //     callback({
        //         resp: 'Todos salio bien'
        //     });
        // }else {
        //     callback({
        //         resp: 'Todos salio mal!!!!'
        //     })
        // }
        
    });



    
});
