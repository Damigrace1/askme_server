const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3030;
const dbURI = 'mongodb+srv://dami:icui4cu2@cluster0.qitd9ao.mongodb.net/Firstserverdb?retryWrites=true&w=majority'
mongoose.connect(dbURI).then((res)=>{
    console.log('connected' + res);
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
      });
    }).catch((err) => console.log(e));

app.use(function (req, res, next) {
    console.log(req.body);
    next();
});
   
app.post('/api/test',(req,res)=>{
    
    const reqParam = req.body;
    res.send(
        {
            "statusCode" : 200,
            "title":"successs"
        }
    );
   
});

app.get(
    '/',(req,res)=>{
        console.log('dfghj');
        fs.readFile('./sec.html',(err,data) =>{
            if(!err){
                res.setHeader('Content-Type','text/html');
                res.write(data);
                res.end();
            }
        });
    }
)
