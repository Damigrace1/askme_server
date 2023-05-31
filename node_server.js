const express = require('express');
const User = require('./models/users');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3030;
const dbURI = 'mongodb+srv://dami:icui4cu2@cluster0.qitd9ao.mongodb.net/userdetails?retryWrites=true&w=majority'
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>{
console.log('connected' + res);
app.listen(PORT,() => {
    console.log(`server started on port`);
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
        console.log(req);
        
        // const user = new User({
        //   title:req.body['title'],
        //   age:req.body['age']  
        // });
        // user.save()
        // .then((result) =>{
        //     res.send("Reg Success!");
        // }).catch((err)=>{
        //     console.log(err);
        // });
    }
)
