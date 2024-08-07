import express from 'express'


const app = express();
app.use(express.json());

const users = [];

//Rota de Criação.
app.post('/usuarios',(req, res) =>{  /*(req vem do front) ,SERVE PARA VER O QUE ESTA CHEGANDO PARA MIM LA DO FRONT.vou pegar dados que foi criado pelo front e da um push no array , 201 cód. criado*/

    users.push(req.body)
    res.status(201).json(req.json) 

})

//Rota de consumir , exibir dados

app.get('/usuarios',(req, res) =>{
    res.status(200).json(users)

});

app.listen(3000);