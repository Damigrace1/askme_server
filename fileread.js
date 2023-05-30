const fs = require ('fs');
//read file
// fs.readFile('./file/fl.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString());
//     }
// }
// );
// write file
//fs.writeFile('./file/fl.txt','Hi',()=>{});
//delete file
if(fs.existsSync('./deleteme')){
    fs.unlink('./deleteme',(err)=>{

    });
}
//make directory and remove directory
// if (!fs.existsSync('./newfolder')){
// fs.mkdir('./newfolder', (err)=>{
//     console.log(err);
// });
// }
// else{
//     fs.rmdir('./newfolder',(err)=>{
//         console.log(err);
//     });
// };
