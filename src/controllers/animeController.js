const listaAnimes = require("../mocks/animeList");

function getAllAnimes (req,res) {
    res.send(listaAnimes)
}

function getAnimeById (req,res)  {
    const id = parseInt(req.params.id);
    const animes = listaAnimes.find(p => p.id === id);

    if(animes){
        res.send(animes);
    } else{
        res.send({ message: "Anime não encontrado!"})
    }
}

function createAnime (req, res) {
    const {
        nome, 
        ano, 
        nota, 
        genero, 
        episodios, 
        imagem, 
        sinopse} = req.body;

        // Ternário-> x ? condição = true : valor estabelecido
    const id = listaAnimes.length ? listaAnimes[listaAnimes.length -1].id +1 : 1;
        
        listaAnimes.push({
            id,
            nome, 
            ano, 
            nota, 
            genero, 
            episodios, 
            imagem, 
            sinopse})
        res.send('Anime cadastrado com sucesso! 👌')
}


function updateAnime (req,res) {
    const {id} = req.params;
    const {
        nome, 
        ano, 
        nota, 
        genero, 
        episodios, 
        imagem, 
        sinopse} = req.body;
    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));    

    if(!animeIndex === -1) {
        return res.send({ mensage: "Anime não encontrado "})
    }
    
    listaAnimes[animeIndex] = {
        ...listaAnimes[animeIndex],
        nome,
        ano, 
        nota, 
        genero, 
        episodios, 
        imagem, 
        sinopse
    }

}

function deleteAnimeById (req,res) {
    const {id} = req.params;
    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));

    if(!animeIndex === -1) {
        return res.send({ mensage: "Anime não encontrado "})
    }
    listaAnimes.slice(animeIndex, 1)
    res.send('Anime deletado com sucesso!')
}



module.exports = {
    getAllAnimes,
    getAnimeById,
    createAnime,
    updateAnime,
    deleteAnimeById
}