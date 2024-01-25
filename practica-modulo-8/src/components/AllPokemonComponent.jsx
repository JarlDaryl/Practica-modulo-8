import React from 'react';
import { getPokemons } from '@/pages/api/pokemonFetch';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import PokemonDetallePage from '@/pages/PokemonDetallePage';

export default function AllPokemons() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		let pokemonAux = getPokemons();

		setPokemon(pokemonAux);
	}, []);

	return (
		<>
			<h2>Gestor de pokemons</h2>
			<p>Todos los pokemons</p>
			{pokemon.map((pokemon, index) => {
				return (
					<div key={index} className='listaPokemons'>
						<span> {pokemon.id} | </span>
						<span> {pokemon.nombre} | </span>
						<Link href={pokemon.url}>{pokemon.url}</Link>
                        <button><Link href={{pathname:'PokemonDetallePage'}}>Detalle</Link> </button>
                        {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/> */}
						
					</div>
				);
			})}
		</>
	);
}
