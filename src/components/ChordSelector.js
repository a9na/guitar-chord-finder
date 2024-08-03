import React from 'react';

const ChordSelector = ({ onChordChange }) => {
  const handleChange = (event) => {
    onChordChange(event.target.value);
  };

  return (
    <div className="mb-3">
      <select className="form-select" onChange={handleChange}>
        <option value="C">C Major</option>
        <option value="D">D Major</option>
        <option value="E">E Major</option>
        <option value="F">F Major</option>
        <option value="G">G Major</option>
        <option value="A">A Major</option>
        <option value="B">B Major</option>
        <option value="Cm">C Minor</option>
        <option value="Dm">D Minor</option>
        <option value="Em">E Minor</option>
        <option value="Fm">F Minor</option>
        <option value="Gm">G Minor</option>
        <option value="Am">A Minor</option>
        <option value="Bm">B Minor</option>
      </select>
    </div>
  );
};

export default ChordSelector;
