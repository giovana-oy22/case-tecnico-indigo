import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import onePieceLogo from '../assets/One_Piece_Logo.png';
import onePieceLoading from '../assets/One_Piece_loading.gif';
import '../styles/Home.css';

export default function Home() {
  const [page, setPage] = useState(1);
  const limit = 4;
  const totalPages = 2;
  const { characters, loading, error } = useCharacters(page, limit);

  if (loading) {
    return (
      <main className="loading-screen">
        <img className="loading" src={onePieceLoading} alt="Carregando..." />
      </main>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!characters) {
    return (
      <>
        <p>Personagens não encontrados.</p>
      </>
    );
  }

  return (
    <main>
      <header className="home-header">
        <img className="logo" src={onePieceLogo} alt="One Piece" />
        <h1>Personagens</h1>
      </header>
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
