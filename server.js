/**
 * Created by Kayvon Rahimi on 20-4-2017.
 */
var express = require('express');
var app = express();
var PORT = 3000;

app.all( '*' , function(request, response){
    response.status(404);
    response.send('404 - Not found.');
})

app.get( '/' , function(request, response) {
    response.send('Bonjour.');
})

app.get( '/about' , function(request, response){
    response.send('Greeted by K1');
})

app.post( '/' , function (request, response){
    response.send('POST request received.');
})

app.put( '/' , function (request, response){
    response.send('PUT request received.');
})


app.listen ( PORT ,function(){
    console.log('ServerApp is listening on port ' + PORT );
})