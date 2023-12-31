

import React from 'react';
import ConstellationsBackground from './BackgroundDesign/ConstellationsBackground';
import NavBar from "./Navigation/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <ConstellationsBackground />
    </div>
  );
}

export default App;
