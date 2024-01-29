import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
	return (
		<div>
			<div className='cabecera'>
				<h1 className='title'>Página de contacto</h1>
			</div>
			<div className='contacto'>
				<p>
					¡Bienvenido al fascinante mundo de Pokémon de la mano del entrenador
					Luis Arques de ciudad Almansa! Tu viaje comienza en la región
					Desarrollón, donde los Pokémon tecnológicos están listos para desafiar
					tus habilidades como programador. Equipado con tus propios Pokémon de
					desarrollo, JavaScript, React, MongoDB, CSS y Next, te embarcarás en
					una aventura única para convertirte en el Campeón del Código.
				</p>
				<p>
					¡JavaScript, el Veloz!
					JavaScript, el Pokémon Veloz, es conocido por su velocidad y
					versatilidad. Su ataque principal es "Ráfaga Asíncrona", que te
					permite ejecutar múltiples tareas a la vez. ¡Usa su habilidad
					"Callback Confuso" para desconcertar a tus oponentes y ganar la
					ventaja en la batalla!
				</p>

				<p>
					¡React, el Constructor!
					React, el Pokémon Constructor, utiliza su poderoso ataque "Componente
					Golpeador" para construir interfaces imponentes.¡Domina React y
					sorprende a tus rivales con componentes invencibles!
				</p>

				<p>
					¡MongoDB, el Almacenador!
					MongoDB, el Pokémon Almacenador, utiliza su ataque "Conexión NoSQL"
					para almacenar datos de manera eficiente. Su habilidad "Índice Rápido"
					mejora la velocidad de acceso a la información.
				</p>

				<p>
					¡CSS, el Estilizador!
					CSS, el Pokémon Estilizador, controla el aspecto y la presentación en
					la batalla. Su ataque "Estilo Deslumbrante" deslumbra a los oponentes
					con diseños atractivos. La habilidad "Media Query Defensiva" le
					permite adaptarse a cualquier entorno.
				</p>

				<p>
					¡Next, el Evolucionador!
					Next, el Pokémon Evolucionador, es capaz de evolucionar rápidamente
					tus aplicaciones. Su ataque "Renderización Server-Side" garantiza una
					experiencia de usuario fluida. Con su habilidad "Enlace Dinámico",
					crea transiciones suaves entre páginas.
				</p>

				<button className='inicio'>
					{' '}
					<Link
						href={{
							pathname: '/',
						}}
					>
						Inicio
					</Link>
				</button>
			</div>
		</div>
	);
}
