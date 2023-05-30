const express = require('express');
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
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });