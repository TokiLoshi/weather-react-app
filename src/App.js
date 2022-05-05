import React from 'react';
import './App.css';
import image from "./images/globe.jpeg";
import Form from './Form';

function App() {
  return (   
      <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px"
      }}
    >
<div className="container">
<div className="container-wrapper">
  <h1>Always take the weather with you</h1>
<Form />
</div>
</div>
    </div>
  );
}

export default App;