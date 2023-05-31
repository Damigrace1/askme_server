const moongose = require('mongoose');
const schema = moongose.Schema;
const userSchema = new schema({
   name:{
    type: String,
    required: true
   } ,
   age:{
    type: String,
    required: true
   } 
},{timestamps : true});
 
const User = moongose.model('user', userSchema);

module.exports = User;