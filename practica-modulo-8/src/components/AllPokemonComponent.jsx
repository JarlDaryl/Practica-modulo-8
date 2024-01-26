import React from 'react';
import { getPokemons } from '@/pages/api/pokemonFetch';
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function AllPokemons() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		let pokemonAux = getPokemons();

		setPokemon(pokemonAux);
	}, []);

	return (
		<>

			<h3 className='thirdTitle'>Todos los pokemons</h3>
			{pokemon.map((pokemon, index) => {
				return (
					<div className='divTodosPokemon'>
					<div key={index} className='divCadaPokemon'>
						<span> {pokemon.id} | </span>
						<span> {pokemon.nombre} | </span>
						<Link href={pokemon.url}>{pokemon.url}</Link>
                        <button><Link href={{pathname:'PokemonDetallePage',
					query: {id: pokemon.id}}}>Detalle</Link> </button>

                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
						
					</div>
					</div>
				);
			})}
		</>
	);
}
