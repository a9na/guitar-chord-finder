import React, { useState } from 'react';
import ChordSelector from './components/ChordSelector';
import Fretboard from './components/Fretboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedChord, setSelectedChord] = useState('C');

  const handleChordChange = (chord) => {
    setSelectedChord(chord);
  };

  return (
    <div className="container">
      <h1>Guitar Chord Finder</h1>
      <ChordSelector onChordChange={handleChordChange} />
      <Fretboard chord={selectedChord} />
    </div>
  );
}

export default App;
