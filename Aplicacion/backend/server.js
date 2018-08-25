/*
    -Tecnología
    Backend
        NodeJS con Express
    Frontend
        Angular
    BD
        MongoBD
    Mapa
        Google Maps (Modo desarrrollo)
    -Funcionalidades a realizar
        Cargar mapa
        Ver puntos
        Tratar de clusterizar
        
*/

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongo=require('mongodb');
var dbo;
var MongoClient = mongo.MongoClient;
var url= "mongodb://localhost:27017/";

app.get('/TipoDelito/:cod',function(req,res){    
    var code=req.params.cod;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Deliktum");           
            dbo.collection("TipoDelito").findOne({Codigo: code}, function(err, result) {
                if (err) throw err;
                console.log(result);
                jsonObj=result;
                res.setHeader('Content-Type', 'application/json');
                res.send(result);
                db.close();
            });             
      });

});
app.get('/TipoDelito',function(req,res){    
    var code=req.params.cod;
    MongoClient.connect(url, function(err, db) {


        if (err) throw err;
        var dbo = db.db("Deliktum");           
            dbo.collection("TipoDelito").find().toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                jsonObj=result;
                res.setHeader('Content-Type', 'application/json');
                res.send(result);
                db.close();
            });             
      });

});

app.get('/Delito/:cod',function(req,res){    
    var code=req.params.cod;
    MongoClient.connect(url, function(err, db) {


        if (err) throw err;
        var dbo = db.db("Deliktum");           
            dbo.collection("Delito").findOne({Codigo: code}, function(err, result) {
                if (err) throw err;
                console.log(result);
                jsonObj=result;
                res.setHeader('Content-Type', 'application/json');
                res.send(result);
                db.close();
            });             
      });

});
app.get('/Delito',function(req,res){    
    var code=req.params.cod;
    MongoClient.connect(url, function(err, db) {


        if (err) throw err;
        var dbo = db.db("Deliktum");           
            dbo.collection("Delito").find().toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                jsonObj=result;
                res.setHeader('Content-Type', 'application/json');
                res.send(result);
                db.close();
            });             
      });

});
app.post('/Delito/',function(req,res){
    var jsonObj=req.body;
    console.log(jsonObj);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Deliktum");
        dbo.collection("Delito").insertOne(jsonObj, function(err, result) {
          if (err) throw err;
          var resultado={ok: 1};
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send();
          db.close();
        });
      });

});
app.listen(4000);