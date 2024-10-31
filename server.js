
// importando o express(pelo site npm)
const express = require('express')
// app recebe express
const app = express()
app.use(express.json());

const listaAnimes = require('./src/mocks/animeList');
const animeController =  require("./src/controllers/animeController")

app.get('/', (req,res) =>{
    res.send("BEM VINDO À API. DIGITE: /animes")
})

app.get('/animes', animeController.getAllAnimes)

app.get('/animes/:id', animeController.getAnimeById)

app.post('/animes', animeController.createAnime)

app.put('/animes/:id', animeController.updateAnime )

app.delete('/animes/:id', animeController.deleteAnimeById )


// const produtos = require("./src/mocks/sneakersList"); 

// // criando rota home
// app.get('/', (req, res) =>{
//   res.send('bem vindo api (digite /products)')
// })


// app.get('/products', (req, res) =>{
//   res.send(produtos)
// })

// app.get('/products/:id', (req,res) => {
//     const id = parseInt(req.params.id);
//     const produto = produtos.find(p => p.id === id);

//     if (produto) {
//         res.send(produto);
//     } else {
//         res.status(404).send({ message: "Produtos não encontrado"})

//     }
// });
// // subindo o servidor na porta 3000
// // app.listen(3000)
// const PORT = 3000
// app.listen(PORT, () => {
//     console.log(`O servidor está rodando na link http://localhost:${PORT}/`)
// })


// Requisições:
// - url: endereço
// - método.

// 
// CREATE POST- cadastrar/inserir/enviar
// READ GET- listar dados
// UPDATE PUT- editar/atualizar
// DELETE DELETE- deletar

// Importando o jwt
const jwt = require('jsonwebtoken');
// criando um token assinado
const token = jwt.sign({id: 15, name: 'Thais', email: 'thais@exemplo.com'}, "juyutyrtrdfcv")

console.log(token);

const jwtVerify = (tokenUser) => {
    try{
        const decoded = jwt.verify(tokenUser, 'juyutyrtrdfcv         ')
        return decoded 
    } catch(error){
        console.log("error!!")
    }
   
}

console.log(jwtVerify(token))