import { theme } from './theme';
import logoSrc from './assets/logo.png';

function App() {
  return (
    <div className="app" style={{ background: theme.palette.background }}>
      <a href="#" target="_blank">
        <img alt="NinetySix logo" src={logoSrc} />
      </a>
    </div>
  );
}

export default App;
