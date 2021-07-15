// const express = require('express');
var express = require('express')
var cors = require('cors')
var app = express()
const port = 5000;

app.use(cors())

const MongoClient = require('mongodb').MongoClient;
const password = 'pTZK5hQtvF3D2Dxd';
const uri = "mongodb+srv://internUser:pTZK5hQtvF3D2Dxd@cluster0.f3vnz.mongodb.net/interndb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const app = express();

app.get('/', (req, res) => {
    res.send('hello I am working')
})

client.connect(err => {
    const collection = client.db("interndb").collection("infos");
    app.post('/addUser', (req, res) => {
        const user = req.body;
        console.log(user);
        // collection.insertOne(user)
        // .then(result => {
        //     console.log(result);
        // })
    })
});


app.listen(port);