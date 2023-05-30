const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>
{
    
res.setHeader('Content-Type','text/html');
fs.readFile('./file/index.html',(err, data)=>{
    if(err){
        res.end();
        console.log(err);
    }
    else{
        console.log('no error');
        res.write(data);
        res.end();
    }
});
}).listen(3000,'localhost',()=>{
    console.log('listening');
});