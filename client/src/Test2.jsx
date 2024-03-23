import React, { useState } from 'react';

const provinceCityMap = {
  // Replace with your actual data
  // Example: 'Tokyo': ['City A', 'City B', 'City C'],
  'Tokyo': ['Shinjuku'],
  'Osaka': ['Osaka City', 'Namba', 'Umeda'],
  // Add more provinces and cities as needed
};

function InputExample() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  console.log(selectedProvince, selectedCity);
  // Handle changes in the province input
  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setSelectedProvince(province);

    // Update the city input value based on the selected province
    const cities = provinceCityMap[province] || [];
    setSelectedCity(cities.length === 1 ? cities[0] : ''); // Set the first city if only one exists
  };

  return (
    <div>
      <label htmlFor="provinceInput">Province:</label>
      <select
        id="provinceInput"
        value={selectedProvince}
        onChange={handleProvinceChange}
      >
        <option value="">Select a province</option>
        {Object.keys(provinceCityMap).map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="cityInput">City:</label>
      <select
        id="cityInput"
        value={selectedCity}
        readOnly // Prevent user input in the city input
      >
        {provinceCityMap[selectedProvince]?.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputExample;
