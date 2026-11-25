import type { ReactNode } from 'react';
import { useCharacterDetails } from '../hooks/useCharacterDetails';
import onePieceLogo from '../assets/One_Piece_Logo.png';
import onePieceLoading from '../assets/One_Piece_loading.gif';
import '../styles/CharacterDetails.css';

function renderDescription(text: string): ReactNode[] {
  const pattern = /~!([\s\S]*?)!~|\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|__([^_]+)__/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      parts.push(
        <details className="description-spoiler" key={key++}>
          <summary>Spoiler</summary>
          <span className="description-spoiler-content">
            {renderDescription(match[1])}
          </span>
        </details>
      );
    } else if (match[2] !== undefined) {
      parts.push(
        <a href={match[3]} key={key++} target="_blank" rel="noreferrer">
          {match[2]}
        </a>
      );
    } else {
      parts.push(<strong key={key++}>{match[4]}</strong>);
    }
    lastIndex = pattern.lastIndex;
  }

  parts.push(text.slice(lastIndex));
  return parts;
}

export default function CharacterDetails({ characterId }: { characterId: number }) {
  const { completedCharacter, loading, error } = useCharacterDetails(characterId);

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
  if (!completedCharacter) {
    return (
      <>
        <a className="back-button" href="?" aria-label="Voltar para a lista" title="Voltar para a lista">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
          </svg>
        </a>
        <p>Personagem não encontrado.</p>
      </>
    );
  }

  const { day, month, year } = completedCharacter.dateOfBirth;
  const monthName = month
    ? new Intl.DateTimeFormat('pt-BR', { month: 'long', timeZone: 'UTC' }).format(
        new Date(Date.UTC(2000, month - 1, 1))
      )
    : null;
  const birthday =
    day && monthName
      ? `${day} de ${monthName}${year ? ` de ${year}` : ''}`
      : 'Não informado';

  const [descriptionIntro, ...descriptionParagraphs] =
    (completedCharacter.description ?? '').trim().split(/\n\s*\n/);

  const age =
    completedCharacter.age?.replace(/[+-]$/, '') || 'Não informada';

  return (
    <main className="character-details">
      <a className="back-button" href="?" aria-label="Voltar para a lista" title="Voltar para a lista">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
        </svg>
      </a>
      <header className="home-header">
        <img className="logo" src={onePieceLogo} alt="One Piece" />
        <h1>{completedCharacter.name.full}</h1>
      </header>
      <img
        className="character-image"
        src={completedCharacter.image.large}
        alt={completedCharacter.name.full}
      />
      <dl>
        <dt>Idade</dt>
        <dd>{age}</dd>
        <dt>Data de nascimento</dt>
        <dd>{birthday}</dd>
        <dt>Site</dt>
        <dd>
          <a className="site-link" href={completedCharacter.siteUrl} target="_blank" rel="noreferrer">
            {completedCharacter.siteUrl}
          </a>
        </dd>
      </dl>
      <h2>Descrição</h2>
      {completedCharacter.description
        ? (
          <>
            <div className="character-description description-intro">
              {renderDescription(descriptionIntro)}
            </div>
            {descriptionParagraphs.map((paragraph, index) => (
              <p className="character-description description-paragraph" key={index}>
                {renderDescription(paragraph)}
              </p>
            ))}
          </>
        )
        : <p className="character-description">Não informada</p>}
    </main>
  );
}
