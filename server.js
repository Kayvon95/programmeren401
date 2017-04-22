/**
 * Created by Kayvon Rahimi on 20-4-2017.
 */
var express = require('express');
var app = express();
var PORT = "process.env.PORT || 3000";

app.all( '*' , function(request, response){
    response.status(404);
    response.send('404 - Not found.');
})

app.get('/json', function(request, response) {
    response.json({
        'some_name': 'Value',
        'an_array_of_objects': [
            {
                'another_name': 'Another value',
                'a_further_name': "A further value"
            },
            {'yet_another_name': 'Yet another value'}
        ],
        'some_boolean': true,
        'some_integer': 42,
        'array_of_ints': [
            2, 3, 5, 7, 11, 13
        ],
        'array_of_strings': [
            "twee", "drie", "vijf", "zeven"
        ]
    })
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