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
      'Áo polo nam',
      'Áo khoác nam',
      'Áo len nam',
      'Áo gile nam',
      'Quần nam',
      'Áo giữ nhiệt nam',
      'Mũ nam',
      'Kính nam',
      'Thắt lưng nam',
      'Tất nam',
      'Quần áo mưa nam',
      'Phụ kiện khác nam'
    ]
  },
  {
    id: 'womengolfclothes',
    categoryName:'Quần áo golf nữ',
    labels: [
      'Tất cả quần áo golf nữ',
      'Áo polo nữ',
      'Áo khoác nữ',
      'Áo len nữ',
      'Áo gile nữ',
      'Chân váy',
      'Váy dài liền thân',
      'Quần nữ',
      'Áo giữ nhiệt nữ',
      'Mũ nữ',
      'Kính nữ',
      'Thắt lưng nữ',
      'Tất nữ',
      'Quần áo mưa nữ',
      'Phụ kiện khác nữ'
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
