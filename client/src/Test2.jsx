import React, { useState, useEffect } from 'react';

const FormComponent = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [roomAmount, setRoomAmount] = useState('');
  const [guestAmount, setGuestAmount] = useState('');
  const [guestInformation, setGuestInformation] = useState({
    guest1: {
      familyName: '',
      givenName: '',
      gender: '',
      day: '',
      month: '',
      year: '',
      email: '',
      phone: '',
    },
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Scroll to the first error
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0];
      const errorElement = document.getElementById(`${firstErrorKey}-error`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [errors]);

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!selectedCity) {
      errors.selectedCity = 'required';
      isValid = false;
    } else {
      errors.selectedCity = '';
    }

    if (!selectedBranch) {
      errors.selectedBranch = 'required';
      isValid = false;
    } else {
      errors.selectedBranch = '';
    }

    // Add validations for other fields...

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log('Form submitted successfully!');
    } else {
      // Form validation failed
      console.log('Form validation failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {errors.selectedCity && (
          <p id="selectedCity-error" className="col-md-1 error-message">{errors.selectedCity}</p>
        )}
        <select
          className={
            errors.selectedBranch
              ? "col-md-2 form__content validate_failed"
              : "col-md-2 form__content"
          }
          value={selectedBranch}
          disabled={!selectedCity}
          onChange={(e) => setSelectedBranch(e.target.value)}
        >
          {filteredBranches.map((item) => (
            <option key={item.branch_id} value={item.branch_id}>
              {item.branch_name}
            </option>
          ))}
        </select>
        {errors.selectedBranch && (
          <p id="selectedBranch-error" className="col-md-1 error-message">{errors.selectedBranch}</p>
        )}
      </div>
      {/* Add other input fields similarly */}
      <button 
      style={{marginTop: 1000}}
      type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
