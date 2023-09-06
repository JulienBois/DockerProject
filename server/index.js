const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const salt = bcrypt.genSaltSync(parseInt(process.env.SALT));


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

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());


app.post("/signup", async (req, res) => {
    let {email, password} = req.body;
    const existingAccounts = await account.where({email: email});
    if(existingAccounts.length === 0){
        password = await bcrypt.hashSync(password, salt);
        const accountData = new account({email: email, password: password});
        await accountData.save();
        res.status(200).send(email + " créé avec succès");
    }else {
        res.status(401).send("Mail déjà lié à un compte");
    }
})

app.post("/signin", async (req, res) => {
    let {email, password} = req.body;
    const existingAccount = await account.where({email: email});
    if(existingAccount?.length === 0){
        res.status(200).send("Aucun compte n'est lié à ce mail");
    }else {
        if(await bcrypt.compareSync(password,existingAccount[0].password))
            res.status(200).send("Vous êtes connecté");
        else{
            res.status(200).send("Mot de passe incorrect");
        }
    }
})

app.listen(PORT, '0.0.0.0', (error) =>{
    if(!error) {
        console.log("Server is Successfully Running and App is listening on port " + PORT);
    }
    else
        console.log("Error occurred, server can't start", error);
    }

);
