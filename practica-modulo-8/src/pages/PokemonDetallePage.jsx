import React from 'react';
import { useRouter } from 'next/router';
import PokemonDetailsComponent from '@/components/PokemonDetailsComponent';
import { deletePokemonById } from './api/pokemonFetch';
import Link from 'next/link';
import ChangeNameComponent from '@/components/ChangeNameComponent';

export default function PokemonDetallePage({ pokemonId }) {
	const router = useRouter();
	const { id } = router.query;

	const deletePokemon = () => {
		deletePokemonById(id);
		router.back();
	};

	return (
		<div className='paginaDetalle'>
			<h2>Pokemon Detalle Page</h2>

			<PokemonDetailsComponent pokemonId={id} />

			<div className='botones'>
				{/* <button className='editar' onClick={ChangeNameComponent}>
					Editar
				</button> */}
				<ChangeNameComponent pokemonId={id} />
				<button className='delete' onClick={deletePokemon}>
					Eliminar Pokemon
				</button>
			</div>
			<div>
				<Link href={{ pathname: '/' }}>Home</Link>
			</div>
		</div>
	);
}
