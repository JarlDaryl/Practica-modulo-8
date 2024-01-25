import '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import AllPokemonComponent from '@/components/AllPokemonComponent';

export default function Home() {
	return (
		<>
			<h1>Pokemon S.A</h1>
			<h2>App de gestión de Pokemon</h2>

				<ul>
					<li>
						<Link href={{ pathname: 'CreatePokemonPage' }}>
							Creacion de Pokemon
						</Link>
					</li>
					<li>
						<Link href={{ pathname: 'ContactPage' }}>Contacto</Link>
					</li>
				</ul>
      <hr/>
      <AllPokemonComponent/>

          
		</>
	);
}
