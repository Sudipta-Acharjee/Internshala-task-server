const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const password = 'pTZK5hQtvF3D2Dxd';
const uri = "mongodb+srv://internUser:pTZK5hQtvF3D2Dxd@cluster0.f3vnz.mongodb.net/interndb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.get('/', (req, res) => {
    res.send('hello I am working')
})

client.connect(err => {
    const collection = client.db("interndb").collection("infos");
    const user = { name: "sudipta", email: "sudipto@gmail.com", phone: "018552225"};
    collection.insertOne(user)
        .then(result => {
            console.log("One user added");
        })
});


app.listen(3000);