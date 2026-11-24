import { useEffect, useState } from 'react';
import type { Character } from '../hooks/useCharacters';

type CharactersDetails = Character & {
  description: string | null;
  age: string | null;
  dateOfBirth: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
  siteUrl: string;
};

const query = `
  query Characters($page: Int, $limit: Int) {
    Media(id: 21, type: ANIME) {
      characters(page: $page, perPage: $limit, sort: FAVOURITES_DESC) {
        nodes {
          id
          name { full }
          image { large }
          description
          age
          dateOfBirth { year month day }
          siteUrl
        }
      }
    }
  }
`;

export function useCharactersDetails(page = 1, limit = 2) {
  const [characters, setCharacters] = useState<CharactersDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadCompletedCharacters(page = 1) {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://graphql.anilist.co', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, variables: { page, limit } }),
        });
        const result = await response.json();
        if (!response.ok || result.errors || !result.data?.Media) {
          throw new Error('Erro ao buscar personagens.');
        }

        const data: CharactersDetails[] = result.data.Media.characters.nodes;
        if (!ignore) setCharacters(data);
      } catch {
        if (!ignore) setError('Não foi possível carregar os personagens.');
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadCompletedCharacters(page);
    return () => { ignore = true; };
  }, [page]);

  return { characters, loading, error };
}
