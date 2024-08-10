import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express();
app.use(express.json());

const users = [];

//Rota de Criação.
 app.post('/usuarios',async (req, res) =>{  /*(req vem do front) ,SERVE PARA VER O QUE ESTA CHEGANDO PARA MIM LA DO FRONT.vou pegar dados que foi criado pelo front e da um push no array , 201 cód. criado*/

  await prisma.user.create({
        data:{
            email: req.body.email,
            name:  req.body.name,
            age:   req.body.age
        }

    })

    res.status(201).json(req.json) 

})

//Rota de consumir , exibir dados

app.get('/usuarios',(req, res) =>{
    res.status(200).json(users)

});

app.listen(3000);