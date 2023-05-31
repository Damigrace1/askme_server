const express = require('express');
const User = require('./models/users');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3030;
const dbURI = 'mongodb+srv://' + process.env.USER + ':' 
+ process.env.PW + '@cluster0.qitd9ao.mongodb.net/userdetails?retryWrites=true&w=majority'
app.use(bodyParser.json(),(res, req,next)=>{
    next();
});
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>{
console.log('connected' + res);
app.listen(PORT,() => {
    console.log(`server started on ${PORT}`);
  });
}).catch((err) => console.log('error' + err));

app.get(
    '/',(req,res)=>{
        const user = new User({
          title:'Dami',
          age:'24'  
        });
        user.save()
        .then((result) =>{
            res.send(result);
        }).catch((err)=>{
            console.log(err);
        });
    }
)
app.post(
    '/reg',(req,res)=>{
        console.log(req.body);
        
        const user = new User({
          name:req.body['name'],
          age:req.body['age']  
        });
        user.save()
        .then((result) =>{
            res.send("Reg Success!");
        }).catch((err)=>{
            res.send("error" + err);
            console.log(err);
        });
    }
)
