import React from 'react';
import SearchableSelect from './Test';

const Test2 = () => {
  const options = [
    { id: 1, value: 'option1', label: 'Option 1' },
    { id: 2, value: 'option2', label: 'Option 2' },
    { id: 3, value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];

  const handleSelect = (selectedValue) => {
    console.log('Selected Value:', selectedValue);
    // Handle selected value here
  };

  return (
    <div className="App">
      <h1>Searchable Select Option</h1>
      <SearchableSelect options={options} onSelect={handleSelect} />
    </div>
  );
};

export default Test2;