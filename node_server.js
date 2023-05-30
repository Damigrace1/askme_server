const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: false }));
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
                res.send(data);
            }
        });
    }
)
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });