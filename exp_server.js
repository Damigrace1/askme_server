const express = require('express');
const { extend } = require('lodash');
const app = express();
app.set('view engine','ejs');
//start server
app.listen(3000);
//listen to get request from client
// app.get('/',(req, res) => {
// res.sendFile('./firstjs.html',{root: __dirname});
// });
//using view engine -ejs
// app.get('/',(req, res) => {
//     blogs = [
//        { title:'first',body:'Hey'},
//        { title:'second',body:'Hi'},
//     ]
//     res.render('ejsview1',{blogs:blogs});
//     });
app.use(express.urlencoded({ extended: false }));
app.post('/api/test',(req,res)=>{
    const reqParam = req.body;
    res.send(
        {
            "statusCode" : 200,
            "title":"success"
        }
    );
   
});