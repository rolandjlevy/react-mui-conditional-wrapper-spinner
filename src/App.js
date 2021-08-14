import React from 'react';
import './App.css';
import SimpleBackdrop from './SimpleBackdrop';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleBackdrop backdropInvisible />
      </header>
    </div>
  );
}

export default App;