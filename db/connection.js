const mongoose = require("mongoose"); 

const DB = "mongodb+srv://bhumikabnsl13:bhumika13@cluster0.vfxcbm5.mongodb.net/Amazonweb?retryWrites=true&w=majority";
mongoose.connect(DB,{
       useNewUrlParser:true, 
       useUnifiedTopology:true 
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
