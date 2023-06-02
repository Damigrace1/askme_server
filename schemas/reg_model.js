
const mongoose = require('mongoose');
const messagesSchema = new mongoose.Schema(
   { message : String}
)
const regSchema = new mongoose.Schema(
    { regId: String,
      messages: [messagesSchema]
    })

     
    module.exports  = new mongoose.model('user',regSchema);