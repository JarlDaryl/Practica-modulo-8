import Link from 'next/link';
import React, { useState } from 'react';
import { addPokemon } from './api/pokemonFetch';
import { useRouter } from 'next/router';

export default function CreatePokemonPage() {
	const router = useRouter();

	// id, nombre, url, height, weight, type

	const [id, setId] = useState('');
	const [nombre, setNombre] = useState('');
	const [url, setUrl] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [type, setType] = useState('');



  const idHandler = (e) => {
    setId(e.target.value)
}

const nombreHandler = (e) => {
    setNombre(e.target.value)
}

const urlHandler = (e) => {
  setUrl(e.target.value)
}

const heightHandler = (e) => {
  setHeight(e.target.value)
}
const weightHandler = (e) => {
  setWeight(e.target.value)
}
const typeHandler = (e) => {
  setType(e.target.value).split([,])
}

const addPokemonClick = () => {
    addPokemon(id, nombre, url, height, weight, type)
    router.back()
}

	return (
		<div>
      <div className='cabecera'>
        			<h1 className='title'>Crea tu Pokémon</h1>
      </div>

			<div className='paginaDetalle'>
				<div>
					<span>Id: </span>
					<input type='text' value={id} onChange={idHandler} />
				</div>
				<div>
					<span>Nombre: </span>
					<input type='text' value={nombre} onChange={nombreHandler} />
				</div>
				<div>
					<span>Url: </span>
					<input type='text' value={url} onChange={urlHandler} />
				</div>
				<div>
					<span>Altura: </span>
					<input type='text' value={height} onChange={heightHandler} />
				</div>
        <div>
					<span>Peso: </span>
					<input type='text' value={weight} onChange={weightHandler} />
				</div>
        <div>
					<span>Tipo: </span>
					<input type='text' value={type} onChange={typeHandler} />
				</div>
				<div>
					<button onClick={addPokemonClick}className='editar'>Crear usuario</button>
				</div>
        <button className='inicio'>
        <Link
				href={{
					pathname: '/',
				}}
			>
				Inicio
			</Link></button>
			</div>

			
		</div>
	);
}
