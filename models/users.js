const moongose = require('mongoose');
const schema = moongose.Schema;
const userSchema = new schema({
   title:{
    type: String,
    required: true
   } ,
   age:{
    type: String,
    required: true
   } 
},{timestamps : true});
 
const User = moongose.model('User', userSchema);

module.exports = User;