import express from "express"
import cors from 'cors'
import { api } from "./services/api.js"
import { sortAbilitiesInAlphabeticalOrder } from "./utils/sortAbilitiesInAlphabeticalOrder.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/pokemons/:name_pokemon', async (request, response) => {
  const { name_pokemon } = request.params

  const responsePokemon = await api.get(`/pokemon/${name_pokemon}`)
    .then((response) => response.data)
    .catch(error => console.log(error))

  const data = {
    ...responsePokemon,
    abilities: sortAbilitiesInAlphabeticalOrder(responsePokemon.abilities)
  }
  return response.json(data)
})

app.listen(3333, () => console.log("Server is running! 🚀"))