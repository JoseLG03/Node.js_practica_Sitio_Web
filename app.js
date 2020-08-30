var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public') );

app.get('/', (peticion, respuesta)=>{
    respuesta.sendFile(index.html);
})

app.listen( 3000, ()=>{
    console.log("Escuhando en el puerto 3000");
});