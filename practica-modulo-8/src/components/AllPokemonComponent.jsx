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
	<div>
			<h3 className='todosPokemons'>Todos los pokémons <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="#ffffff" stroke="#000" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="4"><path fill="#d64141" d="M44 24H30C30 20.69 27.31 18 24 18C20.69 18 18 20.69 18 24H4C4 12.95 12.95 4 24 4C35.05 4 44 12.95 44 24Z"/><path strokeLinecap="round" d="M18 24H4C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24H30"/><path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"/></g></svg></h3>
			<span></span>
			{pokemon.map((pokemon, index) => {
				return (
					<div className='divTodosPokemon'>
					<div key={index} className='divCadaPokemon'>
						<span> {pokemon.id} | </span>
						<span> {pokemon.nombre} | </span>
						<Link href={pokemon.url}>{pokemon.url}</Link>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>

						<button className='detalle'><Link href={{pathname:'PokemonDetallePage',
					query: {id: pokemon.id}}}>Detalles del Pokémon</Link> </button>
						
					</div>
					</div>

				);
			})}
			</div>
		</>
	);
}
