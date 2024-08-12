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
            id: '66b7e7631cbbcd1a3c25d497'
        },
        data:{
            email: req.body.email,
            name:  req.body.name,
            age:   req.body.age
        }

      })
    
      res.status(201).json(req.json) 
  
  })

//Rota de consumir , exibir dados

app.get('/usuarios',async (req, res)=>{


    const users = await prisma.user.findMany();

    res.status(200).json(users)

})

app.listen(3000);