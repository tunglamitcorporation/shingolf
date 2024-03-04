import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ReceiverPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const initialDate1 = queryParams.get('date1') || '';
  const initialDate2 = queryParams.get('date2') || '';
  const initialSelect1 = queryParams.get('select1') || '';
  const initialSelect2 = queryParams.get('select2') || '';

  const [date1, setDate1] = useState(initialDate1);
  const [date2, setDate2] = useState(initialDate2);
  const [select1, setSelect1] = useState(initialSelect1);
  const [select2, setSelect2] = useState(initialSelect2);

  const handleDateChange1 = (e) => {
    setDate1(e.target.value);
  };

  const handleDateChange2 = (e) => {
    setDate2(e.target.value);
  };

  const handleSelectChange1 = (e) => {
    setSelect1(e.target.value);
  };

  const handleSelectChange2 = (e) => {
    setSelect2(e.target.value);
  };

  return (
    <div>
      <label>Date 1:</label>
      <input type="date" value={date1} onChange={handleDateChange1} />
      <label>Date 2:</label>
      <input type="date" value={date2} onChange={handleDateChange2} />
      <label>Select 1:</label>
      <select value={select1} onChange={handleSelectChange1}>
        <option value="">Select option 1</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <label>Select 2:</label>
      <select value={select2} onChange={handleSelectChange2}>
        <option value="">Select option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
    </div>
  );
};

export default ReceiverPage;