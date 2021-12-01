const express = require('express');

const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const port = 3000;

app.get('/',(req,res)=>[
    res.sendFile(__dirname + '/index.html')
]);

app.listen(port,()=>{
    console.log(`serveris running on ${port}`)
});