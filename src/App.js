import Routing from './components/routes/index';
import "./styles/index.scss";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navigation from './components/Navigation';
import ParticlesBG from './components/ParticlesBG';

function App() {
  


  return (
    <div className="App">
      <Routing />
      <ParticlesBG />
    </div>
  );
}

export default App;
