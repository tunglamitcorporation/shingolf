import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelmetLayout from '../../components/HelmetLayout/HelmetLayout';

const SearchPage = ({listMenu}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (item) => {
    setSelectedCategories(prevSelectedCategories => {
        if (prevSelectedCategories.includes(item)) {
            return prevSelectedCategories.filter(category => category !== item);
        } else {
            return [...prevSelectedCategories, item];
        }
    });
};
  const groupedData = {};

  for (const [title, items] of Object.entries(listMenu)) {
    if (!groupedData[title]) {
      groupedData[title] = [];
    }
    groupedData[title] = groupedData[title].concat(items);
  }
  
  const convertListMenu = Object.keys(groupedData).map(title => ({
    title,
    items: groupedData[title]
  }));
  console.log(convertListMenu);

  const handleSearch = () => {
    const formatProductName = (name) => {
      return name.replace(/\s/g, '-');
    };
    const formattedCategories = formatProductName(selectedCategories.join('+'));
    navigate(`/product-list/${formattedCategories}`, { state: {selectedCategories}});
    
    console.log(selectedCategories);
  };
  const handleUncheckAll = () => {
    setCheckedItems({});
  };

  return (
    <>
    <HelmetLayout title={"Shin Golf  | Tìm kiếm"} />
    <div className="container pt-2" style={{height: '400px', overflow:'scroll'}}>
      {convertListMenu.map(category => (
        <div className="d-flex align-items-center">
        <Collapsible trigger={`${category.title}`}>
            <div className="container">
                <div className="row justify-content-between">
                    {category.items.map(item => (
                        <div key={item} className="col-6 mb-4">
                            <div className={`border p-3 ${selectedCategories.includes(item) ? 'border-primary' : ''}`} onClick={() => handleCheckboxChange(item)}>
                                <div className="form-check d-flex align-items-center" style={{height: '50px'}}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        style={{ display: 'none' }}
                                        id={`${item}`}
                                        checked={selectedCategories.includes(item)}
                                        onChange={() => handleCheckboxChange(item)}
                                    />
                                    <label className="form-check-label m-0" style={{textTransform: 'none'}} htmlFor={`${item}`}>
                                        {item}
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Collapsible>
    </div>
      ))}
    </div>
      <div className="d-flex" style={{marginTop:'20px', marginBottom:'100px'}}>
        <div className="col-md-6 m-o p-0">
        <button onClick={handleSearch} style={{width: "100%", height:  '30px', backgroundColor: '#ff3131', border: 'none', color: '#fff', fontWeight: 'bold'}}>Search</button>
        </div>
        <div className="col-md-6 m-0 p-0">
        <button onClick={handleUncheckAll} style={{width: "100%", height:  '30px', backgroundColor: '#ccc', border: 'none', color: '#fff', fontWeight: 'bold'}}>Uncheck All</button>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
