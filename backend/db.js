const mongoose = require('mongoose');
const mongoUrl='mongodb://localhost:27017'


const mongoosed=()=>{
     mongoose.connect(mongoUrl,()=>{
        console.log('connected succesfully')
     })
}


module.exports=mongoosed;


