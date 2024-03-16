// import React, { useState } from 'react';

// const FormValidationExample = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     gender: 'male', // Default value for select field
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     let errors = {};
//     let isValid = true;

//     if (!formData.username.trim()) {
//       errors.username = 'Username is required';
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid';
//       isValid = false;
//     }

//     if (!formData.password.trim()) {
//       errors.password = 'Password is required';
//       isValid = false;
//     }

//     setErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Form data is valid, proceed with submission or processing
//       console.log('Form data:', formData);
//     } else {
//       console.error('Form data is invalid');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <p>{errors.username}</p>}
//       </div>

//       <div>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p>{errors.email}</p>}
//       </div>

//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <p>{errors.password}</p>}
//       </div>

//       <div>
//         <label>Gender</label>
//         <select name="gender" value={formData.gender} onChange={handleChange}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormValidationExample;
import React, { useState } from 'react';

const BookingForm = () => {
  const [startTime, setStartTime] = useState('15:00');
  const [endTime, setEndTime] = useState('12:00');
  const [roomAmount, setRoomAmount] = useState('');
  const [guestAmount, setGuestAmount] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [givenName, setGivenName] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [gender, setGender] = useState('');
  const [company, setCompany] = useState('');
  const [sameBooker, setSameBooker] = useState('Same as person who will stay');
  const [bookerName, setBookerName] = useState('');
  const [differentBooker, setDifferentBooker] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('');
  const [contract, setContract] = useState('No Contract');
  const [vat, setVat] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [pickupNumber, setPickupNumber] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');
  const [dropOffNumber, setDropOffNumber] = useState('');
  const [earlyIn, setEarlyIn] = useState('');
  const [lateOut, setLateOut] = useState('');

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    // Example validation rules (customize as needed)
    if (!roomAmount) {
      errors.roomAmount = 'Room amount is required';
    } else if (isNaN(roomAmount) || parseInt(roomAmount) <= 0) {
      errors.roomAmount = 'Room amount must be a valid number greater than 0';
    }

    if (!guestAmount) {
      errors.guestAmount = 'Guest amount is required';
    } else if (isNaN(guestAmount) || parseInt(guestAmount) <= 0) {
      errors.guestAmount = 'Guest amount must be a valid number greater than 0';
    }

    if (!familyName) {
      errors.familyName = 'Family name is required';
    }

    // Add more validation rules for other fields

    setErrors(errors);
    return Object.keys(errors).length === 0; // Form is valid if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form data is valid, proceed with submission or further processing
      console.log('Form data:', {
        startTime,
        endTime,
        roomAmount,
        guestAmount,
        familyName,
        // Include other form fields here
      });
    } else {
      console.error('Form data is invalid');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields */}
      <input type="text" value={roomAmount} onChange={(e) => setRoomAmount(e.target.value)} />
      {errors.roomAmount && <p>{errors.roomAmount}</p>}

      <input type="text" value={guestAmount} onChange={(e) => setGuestAmount(e.target.value)} />
      {errors.guestAmount && <p>{errors.guestAmount}</p>}

      <input type="text" value={familyName} onChange={(e) => setFamilyName(e.target.value)} />
      {errors.familyName && <p>{errors.familyName}</p>}

      {/* Add more input fields and error messages */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;