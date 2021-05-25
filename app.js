


const express = require("express");
const path=require("path")
const mysql=require("mysql");
const dotenv = require("dotenv");

dotenv.config({path:'./.env'})

const app=express();

const logins = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'limchang123456789',
    database:'userlogins'
})

const publicdirectory=path.join(__dirname,'./public');
app.use(express.static(publicdirectory));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine','hbs');


logins.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("my sql connected")
    }
})

app.use('/',require('./routes/routes'))
app.use('/auth',require('./routes/auth'))





app.listen(3000,()=>{
    console.log("server started on port 3000")
})