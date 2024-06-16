import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import 'bootstrap/dist/css/bootstrap.min.css';

const categoryLabel = [
  {
    id: 'newgolfclub',
    categoryName:'Gậy golf mới',
    labels: [
      'Tất cả các loại gậy', 
      'Gậy driver', 
      'Gậy gỗ', 
      'Gậy rescue/ hybrid',
      'Gậy sắt lẻ', 
      'Set gậy sắt', 
      'Gậy kỹ thuật / wedgey', 
      'Gậy gạt/ Putter', 
      'Bộ gậy giá rẻ' ]
  },
  {
    id: 'oldgolfclub',
    categoryName:'Gậy golf cũ',
    labels: [
      'Tất cả các loại gậy', 
      'Gậy driver', 
      'Gậy gỗ', 
      'Gậy rescue/ hybrid', 
      'Gậy sắt lẻ', 
      'Set gậy sắt', 
      'Gậy kỹ thuật / wedgey', 
      'Gậy gạt/ Putter', 
      'Bộ gậy giá rẻ', 
      'Phụ kiện khác' ]
  },
  {
    id: 'grip',
    categoryName:'Cán gậy / Grip',
    labels: [
      'Cán gậy', 
      'Grip' ]
  },
  {
    id: 'mengolfclothes',
    categoryName:'Quần áo golf nam',
    labels: [
      'Tất cả quần áo golf nam',
      'Áo polo',
      'Áo khoác',
      'Áo len',
      'Áo gile',
      'Quần',
      'Áo giữ nhiệt',
      'Mũ',
      'Kính',
      'Thắt lưng',
      'Tất',
      'Quần áo mưa',
      'Phụ kiện khác'
    ]
  },
  {
    id: 'womengolfclothes',
    categoryName:'Quần áo golf nữ',
    labels: [
      'Tất cả quần áo golf nữ',
      'Áo polo',
      'Áo khoác',
      'Áo len',
      'Áo gile',
      'Chân váy',
      'Váy dài liền thân',
      'Quần',
      'Áo giữ nhiệt',
      'Mũ',
      'Kính',
      'Thắt lưng',
      'Tất',
      'Quần áo mưa',
      'Phụ kiện khác'
    ]
  },
  {
    id: 'accessories',
    categoryName:'Phụ kiện ra sân - bóng golf',
    labels: [
      'Tất cả các phụ kiện ra sân',
      'Bóng golf',
      'Găng tay',
      'Dụng cụ đo khoảng cách',
      'Mác bóng và tee',
      'Ô',
      'Phụ kiện khác'
    ]
  },
  {
    id: 'golfbags',
    categoryName:'Túi gậy - túi golf',
    labels: [
      'Tất cả túi gậy túi golf',
      'Túi gậy',
      'Túi gậy nhỏ',
      'Túi lớn',
      'Túi nhỏ cầm tay',
      'Túi xách 2 quai',
      'Túi đeo hông và balo',
      'Túi đựng giày',
      'Túi đựng bóng',
      'Bộ bảo vệ túi gậy',
      'Bọc đầu gậy'
    ]
  },
  {
    id: 'gollfshoes',
    categoryName:'Giày golf',
    labels: [
      'Giày golf có gắn đinh',
      'Giày golf không gắn đinh'
    ]
  },
  {
    id: 'golftraining',
    categoryName:'Dụng cụ luyện tập golf',
    labels: [
      'Tất cả dụng cụ '
    ]
  }
];

const SearchPage = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const navigate = useNavigate();

  const handleCheckboxChange = (category, label) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [label]: !prevState[category]?.[label]
      }
    }));
  };

  const handleSearch = () => {
    const selectedCategories = Object.keys(checkedItems).filter(category =>
      Object.keys(checkedItems[category] || {}).some(label => checkedItems[category][label])
    );
    const selectedLabels = selectedCategories.reduce((acc, category) => {
      acc[category] = Object.keys(checkedItems[category]).filter(label => checkedItems[category][label]);
      return acc;
    }, {});
    const formattedCategories = selectedCategories.join('+');
    navigate(`/service/${formattedCategories}`, { state: {selectedCategories, selectedLabels } });
console.log(selectedLabels);

  };
  const handleUncheckAll = () => {
    setCheckedItems({});
  };

  return (
    <div className="container pt-2">
      {categoryLabel.map(category => (
        <div className='d-flex align-items-center' >
        <Collapsible key={category.id} trigger={`${category.categoryName}`}>
          {/* <ul className="list-group"> */}
                <div className="container">
                  <div className="row justify-content-between">
            {category.labels.map(label => (
              // <li key={label} className="list-group-item">
              <div key={label} className="col-6 mb-4">
                <div className={`border p-3 ${checkedItems[category.id]?.[label] ? 'border-primary' : ''}`} onClick={() => handleCheckboxChange(category.id, label)}>
              <div className="form-check d-flex align-items-center" style={{height:'50px'}}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  style={{ display: 'none' }} 
                  id={`${category.id}-${label}`}
                  checked={checkedItems[category.id]?.[label] || false}
                  onChange={() => handleCheckboxChange(category.id, label)}
                />
                <label className="form-check-label m-0" style={{textTransform:'none'}} htmlFor={`${category.id}-${label}`}>
                  {label}
                </label>
              </div>
              </div>
            </div>
                // </li>
                ))}
              </div>
              </div>
          {/* </ul> */}
        </Collapsible>
        </div>
      ))}
      <div className="d-flex" style={{marginTop:'20px', marginBottom:'100px'}}>
        <div className="col-md-6 m-o p-0">
        <button onClick={handleSearch} style={{width: "100%", height:  '30px', backgroundColor: '#ff3131', border: 'none', color: '#fff', fontWeight: 'bold'}}>Search</button>
        </div>
        <div className="col-md-6 m-0 p-0">
        <button onClick={handleUncheckAll} style={{width: "100%", height:  '30px', backgroundColor: '#ccc', border: 'none', color: '#fff', fontWeight: 'bold'}}>Uncheck All</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
