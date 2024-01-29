import React from 'react';

export default function FavoritePokemons({ favorites, showFavorites, toggleShowFavorites }) {
  return (
    <div>
      <h3>Tus Pokémon favoritos:</h3>
      <button onClick={toggleShowFavorites} className='favoritos'>
        {showFavorites ? 'Ocultar Favoritos' : 'Mostrar Favoritos'}
      </button>
      {showFavorites && (
        <div>
          {favorites.length > 0 ? (
            favorites.map((favorite, index) => (
              <div key={index}>
               - {favorite.nombre}
              </div>
            ))
          ) : (
            <p>No tienes Pokémon favoritos.</p>
          )}
        </div>
      )}
    </div>
  );
}
