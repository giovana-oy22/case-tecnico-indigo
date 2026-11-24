import { useCharactersDetails } from '../hooks/useCharactersDetails';
import { characterDetailsMock } from '../mocks/characterDetails';

export default function CharacterDetails({
  characterId,
}: {
  characterId: number;
}) {
  const character = useCharactersDetails.find(
    (item) => item.id === characterId
  );

  if (!character) {
    return (
      <main>
        <a href="?">Voltar para a lista</a>
        <h1>Personagem não encontrado</h1>
      </main>
    );
  }

  const { day, month, year } = character.dateOfBirth;
  const birthday =
    day && month ? `${day}/${month}${year ? `/${year}` : ''}` : 'Não informado';

  return (
    <main className="character-details">
      <a href="?">Voltar para a lista</a>
      <h1>{character.name.full}</h1>
      <img
        className="character-image"
        src={character.image.large}
        alt={character.name.full}
      />
      <dl>
        <dt>Idade</dt>
        <dd>{character.age || 'Não informada'}</dd>
        <dt>Data de nascimento</dt>
        <dd>{birthday}</dd>
        <dt>Site</dt>
        <dd>
          <a href={character.siteUrl} target="_blank" rel="noreferrer">
            {character.siteUrl}
          </a>
        </dd>
      </dl>
      <h2>Descrição</h2>
      <p className="character-description">
        {character.description || 'Não informada'}
      </p>
    </main>
  );
}
