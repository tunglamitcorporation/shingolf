import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const SenderPage = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');

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
      <Link to={`/Reservation?date1=${date1}&date2=${date2}&select1=${select1}&select2=${select2}`}>
        Send Data
      </Link>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
  );
};

export default SenderPage;