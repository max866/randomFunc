var express = require('express');
var app = express();
var random = require('./modules/module1.js');

app.get('/',function(req,res){
    //res.send('Testing the route');
    res.send("Random Characters:" + random.RandomChar(40));
});

app.listen(1234,function(){
    console.log('Running on port 1234');
})