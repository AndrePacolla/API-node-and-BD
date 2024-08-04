import express from 'express'


const app = express();

app.get('/usuarios',(req, res) =>{
    res.send('Olá mundo!')

});

app.listen(3000);