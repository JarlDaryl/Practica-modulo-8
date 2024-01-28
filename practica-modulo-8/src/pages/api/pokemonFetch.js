import { pokemons } from "@/mock/dbPokemon"

export const getPokemons = () => {
    return pokemons.map(pokemon => {
        return {
            id: pokemon.id,
            nombre: pokemon.name,
            url: pokemon.url
        }
    })
}

export const getPokemonById = (idParam) => {
    let pokemonAux = pokemons.find(pokemon => pokemon.id == idParam)
    return pokemonAux
}

export const modifyName = (pokemonId, newName) => {
    pokemons.map(pokemon => {
        if (pokemon.id == pokemonId) {
            pokemon.name = newName
        }
    })
}

export const deletePokemonById = (idPokemon) => {
    let pokemonAux = pokemons.findIndex(pokemon => pokemon.id == idPokemon)
    pokemons.splice(pokemonAux, 1)
}

/**
 
@param {number} id
@param {string} nombre
@param {string} url
@param {number} height
@param {number} weight
@param {array<string>} type
*/
export const addPokemon = (id, nombre, url, height, weight, type) => {
    pokemons.push({
        id: id,
        name: nombre,
        url: url,
        details: {
            height: height,
            weight: weight,
            type: type
        }
    })
}