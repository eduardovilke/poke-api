import express from 'express'
import { pokemonRoutes } from './pokemon.route.js'

const router = express.Router();

const defaultRoutes = [
  {
    path: '/pokemons',
    route: pokemonRoutes,
  },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
})

export { router }
