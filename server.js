import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express();
app.use(express.json());
app.use(cors())




//Rota de Criação.
 app.post('/usuarios',async (req, res) =>{  

  await prisma.user.create({
        data:{
            email: req.body.email,
            name:  req.body.name,
            age:   req.body.age
        }

    })
  
    res.status(201).json(req.json) 

})


//Rota de Edição. Uso tipo Route Params, servira como buscador especifico
app.put('/usuarios/:id',async (req, res) =>{  

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data:{
            email: req.body.email,
            name:  req.body.name,
            age:   req.body.age
        }

      })
    
      res.status(201).json(req.json) 
  
  })


// Rota para Deletar Usuários, uso tipo Route Params, servira como buscador especifico
app.delete('/usuarios/:id', async (req, res) =>{

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({msg: 'Usuário deletado com Sucesso'})

})


//Rota de consumir , exibir dados . query formato da rota de variavel e valor , where por onde vai ser feita a pesquisa, em todos os campos que quis preenceher ex : name, email , age ,etc..
app.get('/usuarios',async (req, res)=>{

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name, 
                email: req.query.email,
                age: req.query.age
            }
        })
    }else{
        users = await prisma.user.findMany();
    }

    res.status(200).json(users)

})

app.listen(3000);