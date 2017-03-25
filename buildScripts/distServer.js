import express from 'express';
import path from 'path';
import open from 'open';
import compression from "compression";


/* eslint-disable no-console*/
const port = 3000;
const app = express();
//no good for actual prod- just for hosting minified version
//locally so as to check all ok

app.use(compression());
app.use(express.static('dist'));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.get('/users', function(req, res){
//hard coding for simplicity. pretend this hits a real db
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tammy@gmail.com"},
    {"id": 3,"firstName":"tina","lastName":"lee","email":"tina@hotmail.com"}
  ]);

});




app.listen(port, function(err){

  if (err) {
    console.log(err);
  } else{
    open('http://localhost:' + port);
  }
});
