import express from 'express'


const app = express();
app.use(express.json());

const users = [];

//Rota de Criação.
app.post('/usuarios',(req, res) =>{  /*(req vem do front) , pega dados que foi criado pelo front e da um push no array*/

    users.push(req.body)



})

//Rota de consumir , exibir dados

app.get('/usuarios',(req, res) =>{
    res.json(users)

});

app.listen(3000);