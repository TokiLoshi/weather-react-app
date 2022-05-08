import React from 'react';
import './App.css';
import image from "./images/globe.jpeg";
import Weather from './Weather';

function App() {
  return (   
      <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: 'white',
        padding: "10px",
        margin: "10px",
        borderRadius: "5px"
      }}
    >
<div className="container">
<div className="container-wrapper shadow">
  <h1>Always take the weather with you</h1>

<Weather defaultCity="Vilanculos" />
</div>
<div className="footer">
<p className="open-source">
      <a
        href="https://github.com/TokiLoshi/weather-react-app"
        className="open-source" target="_blank" rel="noopener noreferrer"
      >
        Open source code
      </a>
      <a href="https://tiny-valkyrie-cad23c.netlify.app/" className="open-source" target="_blank" rel="noopener noreferrer">by Bianca Silva</a>
    </p>
    </div>
</div>
    </div>
  );
}

export default App;