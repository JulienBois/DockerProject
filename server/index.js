require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

mongoose.connect('mongodb://mongodb-dev:27017/docker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => {
        console.log("Connected to the mongodb database.");
    }
).catch(
    (error) => {
        console.log(error + " ça marche pas ta merde");
    }
)

const accountSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: { type: String, length: 4, required: true },
});
const account = mongoose.model("Account", accountSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, (error) =>{
        if(!error)
            console.log("Server is Successfully Running and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);

app.post("/signup", async (req, res) => {
    let {email, password} = req.body;
    const existingAccounts = await account.where({email: email});
    if(existingAccounts.length === 0){
        password = bcrypt.hashSync(password, salt);
        const accountData = new account({email: email, password: password});
        await accountData.save();
        res.status(200).json(email + " créé avec succès");
    }else {
        res.status(401).json("Mail déjà lié à un compte");
    }
})

app.post("/signin", async (req, res) => {
    let {email, password} = req.body;
    const existingAccount = await account.where({email: email});
    if(existingAccount.length === 0){
        res.status(200).json("Aucun compte n'est lié à ce mail");
    }else {
        const match = await bcrypt.compare(password,existingAccount[0].password);
        if(match)
            res.status(200).json("Vous êtes connecté");
        else{
            res.status(200).json("Mot de passe incorrect");
        }
    }
})