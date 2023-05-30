const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3030;
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
        fs.readFile('./sec.html',(err,data) =>{
            if(!err){
                res.setHeader('Content-Type','text/html');
                res.write(data);
                res.end();
            }
        });
    }
)
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });