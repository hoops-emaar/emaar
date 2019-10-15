import routes from './routes';



const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser');
const mongoose = require('mongoose')
require('dotenv/config')

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.dbconnect, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log("connected to DB"));

app.use('/app', routes.app)

app.get("/", async (req, res) => {
    res.render('index.ejs');
})

app.get("/vale", async (req, res) => {
    res.render('kupon.ejs');
})
app.get("/burcu-esmersoy", async (req, res) => {
    res.render('burcu.ejs');
})

app.listen(PORT, () => console.log("app listening on port" + PORT));