import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PokemonDetailsComponent from '@/components/PokemonDetailsComponent';
import { deletePokemonById } from './api/pokemonFetch';
import Link from 'next/link';
import ChangeNameComponent from '@/components/ChangeNameComponent';

export default function PokemonDetallePage() {
	const router = useRouter();
	const { id } = router.query;

	const [showChangeName, setShowChangeName] = useState(false);

	const deletePokemon = () => {
		deletePokemonById(id);
		router.back();
	};

	const toggleChangeName = () => {
		setShowChangeName(!showChangeName);
	};

	return (
		<div>
			

			{showChangeName ? (
				<ChangeNameComponent
					pokemonId={id}
					toggleChangeName={toggleChangeName}
				/>
			) : (
				<div>
					<PokemonDetailsComponent pokemonId={id} />

					<div className='botones'>
						<button className='editar' onClick={toggleChangeName}>
							Editar Nombre
						</button>
						<button className='delete' onClick={deletePokemon}>
							Eliminar Pokemon
						</button>
						
					</div>
				</div>
			)}

			<div className='flex-inicio'>
        <button className='inicio'>
				<Link href={{ pathname: '/' }} >Inicio</Link>
        </button>
			</div>
		</div>
	);
}
