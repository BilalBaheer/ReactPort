import Navbar from "./Navbar" // navigation component
import AboutMe from './AboutMe';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe/>
       {/* Render other components here */}
    </div>
  );
}

export default App;
