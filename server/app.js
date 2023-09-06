const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb://mongo:27017/docker').then(
    () => {
        console.log("Connected to the mongodb database.");
    }
).catch(
    (error) => {
        console.log(error + " ça marche pas");
    }
)
const accountSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: { type: String, length: 4, required: true },
});
const account = mongoose.model("Account", accountSchema);

server.use(express.urlencoded());
server.use(express.json());
server.use(cors())

server.get('/', (req, res) => {
    console.log('HelloWorld');
    res.status(200).json({message: 'HelloWorld'})
})

server.listen(5000, '0.0.0.0', (error) => {
    console.log('Is running')
});
