var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('Testing the route');
});

app.listen(1234,function(){
    console.log('Running on port 1234');
})