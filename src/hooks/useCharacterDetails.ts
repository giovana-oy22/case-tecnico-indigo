import type { Character } from './useCharacters';
import { useEffect, useState } from 'react';

type CharacterDetails = Character & {

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
    query ($characterId: Int) {
      Character(id: $characterId) {
        id
        name { full }
        image { large }
        description
        age
        dateOfBirth { year month day }
        siteUrl
      }
    }
  `
;

export function useCharacterDetails(characterId: number) {
  const [completedCharacter, setCompletedCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadCompletedCharacter() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://graphql.anilist.co', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, variables: { characterId } }),
        });
        const result = await response.json();
        if (!response.ok || result.errors || !result.data?.Character) {
          throw new Error('Erro ao buscar personagem.');
        }

        const data: CharacterDetails = result.data.Character;
        if (!ignore) setCompletedCharacter(data);
      } catch {
        if (!ignore) setError('Não foi possível carregar o personagem.');
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadCompletedCharacter();
    return () => { ignore = true; };
  }, [characterId]);

  return { completedCharacter, loading, error };
}