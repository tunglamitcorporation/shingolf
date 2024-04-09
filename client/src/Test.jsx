import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';

const DateDifferenceCalculator = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [difference, setDifference] = useState(null);

  const calculateDifference = () => {
    if (startDate && endDate) {
      const differenceInMilliseconds = Math.abs(endDate - startDate);
      const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
      setDifference(differenceInDays);
    }
  };

  return (
    <div>
      <div>
        <h3>Select Start Date:</h3>
        <Flatpickr
          value={startDate}
          onChange={(selectedDates) => setStartDate(selectedDates[0])}
        />
      </div>
      <div>
        <h3>Select End Date:</h3>
        <Flatpickr
          value={endDate}
          onChange={(selectedDates) => setEndDate(selectedDates[0])}
        />
      </div>
      <div>
        <button onClick={calculateDifference}>Calculate Difference</button>
      </div>
      <div>
        {difference !== null && (
          <p>The difference between the two dates is {difference} days.</p>
        )}
      </div>
    </div>
  );
};

export default DateDifferenceCalculator;
