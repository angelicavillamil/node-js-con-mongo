var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
app.get('/',(req,res)=> res.send('Mongo!!!'));


 // Cargamos el módulo de mongoose para poder conectarnos a MongoDB
 var mongoose = require('mongoose');
 
 // Usamos el método connect para conectarnos a nuestra base de datos
 mongoose.connect('mongodb://localhost:27017/db', {useMongoClient: true})
         .then(() => {
 
                 // Cuando se realiza la conexión, lanzamos este mensaje por consola
             console.log('La conexión a MongoDB se ha realizado correctamente!!');
         })
         .catch(err => console.log(err));

         app.listen(port,()=>console.log('corriendo'));
         // Si no se conecta correctamente escupimos el error
       module.exports=app;

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
}); */