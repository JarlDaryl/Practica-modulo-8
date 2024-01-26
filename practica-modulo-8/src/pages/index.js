import '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import AllPokemonComponent from '@/components/AllPokemonComponent';

export default function Home() {
	return (
		<>

			<header className='navegator'>
				<ul className='lista'>
					<li>
						<Link href={{ pathname: 'CreatePokemonPage' }} className='link'>
							Creacion de Pokemon
						</Link>
					</li>
					<li>
						<Link href={{ pathname: 'ContactPage' }} className='link'>Contacto</Link>
					</li>
				</ul>
				</header>
				<div className='cabecera'>
				<h1 className='title'>Pokemon S.A</h1>
			<h2 className='subtitle'>App de gestión de Pokemon</h2>
			</div>


      <AllPokemonComponent/>

          
		</>
	);
}
