const express = require ('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, (err)=>{
    if(err){
        alert("there was an error trying to get index page");
    }else{
        alert("succesful get" + 3000);
    }
})