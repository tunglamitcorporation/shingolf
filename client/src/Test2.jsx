import React, { useState } from 'react';

const FormExample = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setIsValid(value !== ''); // Example validation rule: select option is not empty
  };

  return (
    <div className="form-container">
      <select
        value={selectedOption}
        onChange={handleChange}
        className={`select-field ${isValid ? 'valid' : 'invalid'}`}
      >
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {!isValid && <p className="error-message">Option selection is required</p>}
    </div>
  );
};

export default FormExample;