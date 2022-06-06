import Routing from './components/routes/index';
import "./styles/index.scss";
import '@fortawesome/fontawesome-svg-core/styles.css'
import ParticlesBG from './components/ParticlesBG';
import { useState } from "react";
import english from "./data/english.json";
import french from "./data/french.json";

function App() {
  
  const [selectedTab, setSelectedTab] = useState('home')
  const [language, setLanguage] = useState(true)
  let langFile;
    language? langFile=english : langFile=french;


  return (
    <div className="App">
      <Routing language={language} setLanguage={setLanguage} langFile={langFile} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ParticlesBG />
    </div>
  );
}

export default App;
