var express = require('express');
var app = express();
var random = require('./modules/module1.js');
var crypto = require('crypto');

app.get('/',function(req,res){
    //res.send('Testing the route');
    crypto.randomBytes(20,(err,buf) =>{
        var randomVaule = buf.toString('hex');
        res.send(`Random Characters:${random.RandomChar(40)} <br> Cypto Characters: ${randomVaule}`);
    })
    
});

app.listen(1234,function(){
    console.log('Running on port 1234');
})