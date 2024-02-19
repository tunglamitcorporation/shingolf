import { useState, useEffect } from "react";
const data = {
    "city": [
      { "id": "HCM", "city_name": "Ho Chi Minh" },
      { "id": "HN", "city_name": "Ha Noi" },
      { "id": "DN", "city_name": "Da Nang" },
      { "id": "HP", "city_name": "Hai Phong" }
    ],
    "branch": [
      { "branch_id": "le-thanh-ton-detail", "city_id": "HCM", "city_name": "Ho Chi Minh", "branch_name": "Azumaya Le Thanh Ton" },
      { "branch_id": "thai-van-lung-1-detail", "city_id": "HCM", "city_name": "Ho Chi Minh", "branch_name": "Azumaya Thai Van Lung 1" },
      { "branch_id": "thai-van-lung-2-detail", "city_id": "HCM", "city_name": "Ho Chi Minh", "branch_name": "Azumaya Thai Van Lung 2" },
      { "branch_id": "annex-detail", "city_id": "HCM", "city_name": "Ho Chi Minh", "branch_name": "Azumaya Annex" },
      { "branch_id": "hai-ba-trung-detail", "city_id": "HN", "city_name": "Ha Noi", "branch_name": "Azumaya Hai Ba Trung 1" },
      { "branch_id": "kim-ma-2-detail", "city_id": "HN", "city_name": "Ha Noi", "branch_name": "Azumaya Kim Ma 2" },
      { "branch_id": "kim-ma-3-detail", "city_id": "HN", "city_name": "Ha Noi", "branch_name": "Azumaya Kim Ma 3" },
      { "branch_id": "linh-lang-detail", "city_id": "HN", "city_name": "Ha Noi", "branch_name": "Azumaya Linh Lang" },
      { "branch_id": "da-nang", "city_id": "DN", "city_name": "Da Nang", "branch_name": "Azumaya Da Nang Hotel" },
      { "branch_id": "hai-phong", "city_id": "HP", "city_name": "Hai Phong", "branch_name": "Azumaya Hai Phong Hotel" }
    ]
  };
  
  function  CityProvinceInput() {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
  
    useEffect(() => {
      // Automatically select the branch if the city has only one branch
      const cityBranches = data.branch.filter((branch) => branch.city_id === selectedCity);
      if (cityBranches.length === 1) {
        setSelectedBranch(cityBranches[0].branch_id);
      }
    }, [selectedCity]); // Update selected branch when city changes
  
    const handleCityChange = (event) => {
      const cityId = event.target.value;
      setSelectedCity(cityId);
    };
  
    const handleBranchChange = (event) => {
      const branchId = event.target.value;
      setSelectedBranch(branchId);
    };
  
    return (
      <div>
        <label htmlFor="city">City:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
         
          {data.city.map((city) => (
            <option key={city.id} value={city.id}>
              {city.city_name}
            </option>
          ))}
        </select>
  
        <label htmlFor="branch">Branch:</label>
        <select id="branch" value={selectedBranch} onChange={handleBranchChange} disabled={!selectedCity}>
        
          {data.branch
            .filter((branch) => branch.city_id === selectedCity)
            .map((branch) => (
              <option key={branch.branch_id} value={branch.branch_id}>
                {branch.branch_name}
              </option>
            ))}
        </select>
      </div>
    );
  }
  
  
  export default CityProvinceInput;