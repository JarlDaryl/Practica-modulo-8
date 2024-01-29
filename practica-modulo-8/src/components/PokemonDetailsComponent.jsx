import { getPokemonById } from '@/pages/api/pokemonFetch';
import React, { useState, useEffect } from 'react';

export default function PokemonDetailsComponent({ pokemonId }) {
	const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		let pokemonAux = getPokemonById(pokemonId);
		setPokemon(pokemonAux);
	}, []);

	return (
		<div>
			
			<div className='detallePokemon'>
				<span>Id: {pokemon.id}</span>
				<span>Nombre: {pokemon.name}</span>
				<span>Altura: {pokemon.details ? pokemon.details.height : "Cargando..."}</span>
				<span>Peso: {pokemon.details ? pokemon.details.weight : "Cargando..."}</span>
				<span>Tipo: {" "}
       			{pokemon.details ? pokemon.details.type.join(", ") : "Cargando..."}</span>

				<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
			</div>

			
		</div>
	);
}

