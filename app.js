const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 6000;
const {MONGOURI} = require('./config/Keys');

mongoose.connect(MONGOURI,{ 
    useNewUrlParser: true
})

mongoose.connection.on('connected',()=>{
    console.log('connected to mongo instance');
})
mongoose.connection.on('error',(err)=>{
    console.log('error to mongo instance',err);
})



require('./models/user') // user schema
require('./models/post') // post schema

app.use(express.json()); // Middleware to parse to json
app.use(require('./routes/auth'))//resister rpoutes
app.use(require('./routes/post'))
app.use(require('./routes/user'))


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});