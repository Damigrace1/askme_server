
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
 const userParser = app.use(bodyParser.json(),(res, req,next)=>{
    next();
});
console.log("3");
const home =  app.get(
    '/',(req,res)=>{
        console.log("ok");
        res.send("ok");  
    }
);
console.log('34')
module.exports = {
userParser,
home
}
