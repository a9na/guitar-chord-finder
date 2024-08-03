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
      </select>
    </div>
  );
};

export default ChordSelector;
