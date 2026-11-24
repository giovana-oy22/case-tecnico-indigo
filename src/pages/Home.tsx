import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';

export default function Home() {
  const [page, setPage] = useState(1);
  const limit = 2;
  const totalPages = 2;
  const { characters, loading, error } = useCharacters(page, limit);

  return (
    <main>
      <h1>Personagens de One Piece</h1>
      <div className="characters">
        {characters.map((character) => (
          <a
            className="character-card"
            href={`?character=${character.id}`}
            key={character.id}
          >
            <img
              src={character.image.large}
              alt={character.name.full}
              crossOrigin="anonymous"
            />
            <h2>{character.name.full}</h2>
          </a>
        ))}
      </div>
      <nav className="pagination" aria-label="Paginação de personagens">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Anterior
        </button>
        <span>
          Página {page} de {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Próxima
        </button>
      </nav>
    </main>
  );
}
