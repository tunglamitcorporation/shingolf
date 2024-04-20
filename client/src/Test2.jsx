import React, { useState } from 'react';

const EnglishOnlyInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Regular expression to detect Japanese characters
    const japaneseRegex = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}ー]+/u;

    if (japaneseRegex.test(value)) {
      setShowNotification(true);
    } else {
      setShowNotification(false);
      setInputValue(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter English text only"
      />
      {showNotification && (
        <p style={{ color: 'red' }}>Please input English text only.</p>
      )}
    </div>
  );
};

export default EnglishOnlyInput;
