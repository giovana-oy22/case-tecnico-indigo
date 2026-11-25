import { useEffect, useState } from 'react';

export type Character = {
  id: number;
  name: { full: string };
  image: { large: string };
};

const query = `
  query Characters($page: Int, $limit: Int) {
    Media(id: 21, type: ANIME) {
      characters(page: $page, perPage: $limit, sort: FAVOURITES_DESC) {
        nodes {
          id
          name { full }
          image { large }
        }
      }
    }
  }
`;

export function useCharacters(page = 1, limit = 2) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadCharacters(page = 1) {
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

        const data: Character[] = result.data.Media.characters.nodes;
        if (!ignore) setCharacters(data);
      } catch {
        if (!ignore) setError('Não foi possível carregar os personagens.');
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadCharacters(page);
    return () => { ignore = true; };
  }, [page, limit]);

  return { characters, loading, error };
}
