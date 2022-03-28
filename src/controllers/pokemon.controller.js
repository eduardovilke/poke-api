import { api } from '../services/api.js'
import { sortAbilitiesInAlphabeticalOrder } from '../utils/sortAbilitiesInAlphabeticalOrder.js'

export default class PokemonController {
  async list(request, response){
    const { name } = request.params

    const responsePokemon = await api.get(`/pokemon/${name}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))

    if(!responsePokemon){
      return response.status(404).json({ error: 'Pokemon not found!' })
    }

    const data = {
      ...responsePokemon,
      abilities: responsePokemon?.abilities 
      ? sortAbilitiesInAlphabeticalOrder(responsePokemon.abilities)
      : []
    }
    return response.send(data)
  }
}