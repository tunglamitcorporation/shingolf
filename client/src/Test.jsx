import React, { useState } from 'react';

const BookingForm = () => {
  const [gender, setGender] = useState(''); // State to hold selected gender
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const validateForm = () => {
    let errors = {};

    if (!gender) {
      errors.gender = 'Please select gender';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Form is valid if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form data is valid, proceed with submission or further processing
      console.log('Form data:', {
        gender,
        // Include other form fields here
      });
    } else {
      console.error('Form data is invalid');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        {errors.gender && <p>{errors.gender}</p>}
      </div>

      {/* Add more input fields and error messages */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
