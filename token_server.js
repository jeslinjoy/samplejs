var express = require('express');
var fire = require("firebase");
var bodyParser = require('body-parser')
var FirebaseTokenGenerator = require("firebase-token-generator");

var app = express();
app.use(bodyParser());

app.get('/', function (req, res) {
   //res.send('Hello World');
//res.send('from get event');
res.sendFile( __dirname + "/" + "index.html" );

})

app.post('/', function (req, res){

//res.send('request recived');


req.on('data', function(chunk) {

      //grab form data as string
      var formdata = chunk.toString();
       var token = gentoken(formdata);
       console.log(token);
       res.send(token);

    

})  
    function gentoken(a)
    {   
    	//var username = eval(a.split(":")[0]);
    	//var pas= eval(a.split(":")[1]);
    	var arr = a.split(":");
    	var tokenGenerator = new FirebaseTokenGenerator("cVgBBHvR1YC4Ga6Rk00W1tt7MAohZhwIgT4BbbpU");
        var token = tokenGenerator.createToken({ uid: arr[0],some: arr[1]});
        return token;
    }
    
    
})


var server = app.listen(9800, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
