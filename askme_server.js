const express = require('express');
const mongoose = require('mongoose');
const consts = require('./consts');
const User = require('./schemas/reg_model');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect(consts.dbURI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>{
    console.log("mongo connected");
    app.listen(consts.PORT,() => {
        console.log("server connected");
        app.use(bodyParser.json(),(res, req,next)=>{
            next();
        });
        app.post(
            '/updateText',(req,res)=>{
                updateTextArray(req.body.userId , req.body.text).then((val) =>{
                res.json(val);
                });
            }
        );
        app.post(
            '/saveUser',(req,res)=>{
                saveUser(req.body.userId).then((val) =>{
                    res.json(val);
                });
            }
        );
        app.post(
            '/getTexts',(req,res)=>{
                readAllTexts(req.body.userId).then((val) =>{
                    res.json(val);
                });
            }
        );
        
      });
    }).catch((err) => console.log('error' + err));

async function saveUser(id){
    try{
       await  User.create({
            regId: id
        });
        return {
            "code" : "200",
            "message" : "Saved!"};
    }
    catch(err){
        return {
            "code" : "200",
            "message" : err};
    }

}
async function updateTextArray(id,text){
    try{
        const user =await User.findOne({
            regId:id
        });
        user.messages.push({
            message : text
        });
     await user.save();
     return {
        "code" : "200",
        "message" : "Updated!"};
    }
    catch(err){
        return {
            "code" : "200",
            "message" : err};
    }
}
async function readAllTexts(id){
    try{
       const texts = await  User.findOne({
        regId:id}
       );
       console.log(texts);
         return {
             "code" : "200",
             "message" : "Saved!",
             "result" : texts.messages || []
            };
     }
     catch(err){
         return {
             "code" : "200",
             "message" : err};
     }

}
async function deleteOneText(){

}
async function deleteAllText(){

}