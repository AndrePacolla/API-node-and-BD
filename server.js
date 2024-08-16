import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express();
app.use(express.json());



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


//Rota de Edição.
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


// Rota para deletar Usuários
app.delete('/usuarios/:id', async (req, res) =>{

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({msg: 'Usuário deletado com Sucesso'})

})


//Rota de consumir , exibir dados
app.get('/usuarios',async (req, res)=>{

    const users = []

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