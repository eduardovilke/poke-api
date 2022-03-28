import { api } from '../services/api.js'
import { sortAbilitiesInAlphabeticalOrder } from '../utils/sortAbilitiesInAlphabeticalOrder.js'

export default class PokemonController {
  async list(request, response){
    const { name } = request.params

    const responsePokemon = await api.get(`/pokemon/${name}`)
      .then((response) => response.data)
      .catch(error => console.log(error))

    const data = {
      ...responsePokemon,
      abilities: sortAbilitiesInAlphabeticalOrder(responsePokemon.abilities)
    }
    response.send(data)
  }
}