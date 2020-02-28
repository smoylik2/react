import React from 'react';
import './App.css';
import Headers from "./headers";
import Images from "./image";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headers />
        <Images/>
        <p>Im addit this </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Headers/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
