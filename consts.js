
const dbURI = 'mongodb+srv://' + process.env.USER + ':' 
+ process.env.PW+ '@cluster0.qitd9ao.mongodb.net/userdetails?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3030;
module.exports = {
  dbURI , PORT
}
 
