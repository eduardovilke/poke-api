import express from 'express'
import PokemonController from '../controllers/pokemon.controller.js'

const pokemonRoutes = express.Router()

const pokemon = new PokemonController

pokemonRoutes.get('/:name', (request, response) => {
  return pokemon.list(request, response)
})

export { pokemonRoutes }