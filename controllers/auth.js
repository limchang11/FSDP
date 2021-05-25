const mysql=require("mysql");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const express = require("express");
const crypto = require("crypto")
const logins = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'limchang123456789',
    database:'userlogins'
})

exports.register=(req,res)=>{
    console.log(req.body);
    const{name,email,password,passwordconfirm}=req.body;
    logins.query('SELECT email FROM user_logins WHERE email=?',[email],async (error,results)=>{
        if(error){
            console.log(error)
        }
        if(results.length>0){
            return res.render('register',{
                message:'That email is already in use'
            })
            
             
        
        }
        
        
        logins.query('INSERT INTO user_logins SET ?',{id:crypto.randomBytes(6).toString("hex"),name:name,email:email,password:password},(error,results)=>{
            if(error){
                console.log(error);
            }else{
                console.log(results)
                return res.render('register',{
                    message:'User registered'
                })
            }
        })
        
    })
}
