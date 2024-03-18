import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const validateForm = () => {
    let errors = {};

    // Username validation
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Form is valid if there are no errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      // Proceed with form submission or further processing
    } else {
      console.error('Form data is invalid');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {formErrors.username && <p>{formErrors.username}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && <p>{formErrors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;