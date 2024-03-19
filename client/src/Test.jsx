import React, { useState } from 'react';

const SearchableSelect = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredOptions = options.filter(option =>
      option.label.toLowerCase().includes(searchTerm)
    );
    setFilteredOptions(filteredOptions);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search options..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSelect(e.target.value); // Pass the selected value to the parent component
        }}
      >
        {filteredOptions.map(option => (
          <option key={option.id} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchableSelect;
