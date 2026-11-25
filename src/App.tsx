import Home from './pages/Home';
import CharacterDetails from './pages/CharacterDetails';
import './styles/App.css';

export default function App() {
  const characterId = new URLSearchParams(window.location.search).get('character');

  return characterId ? (
    <CharacterDetails characterId={Number(characterId)} />
  ) : (
    <Home />
  );
}
