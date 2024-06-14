import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const productData = [
  {
    id: 'golfsticknew',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image: 'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: '10',
    rate: 5,
  },
  {
    id: 'golfclothesmen',
    productName: 'Áo Mens UA Matchplay Stripe Polo',
    image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
    price: '40',
    rate:4,
  },
  {
    id: 'golfbag',
    productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
    image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
    price: '60',
    rate: 3,
  }
];

export default function SearchPage () {
  const [checkedItems, setCheckedItems] = useState({
    golfsticknew: false,
    golfclothesmen: false,
    golfbag: false
  });

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSearch = () => {
    const selectedIds = Object.keys(checkedItems).filter((key) => checkedItems[key]);
    const selectedProducts = productData.filter((product) => selectedIds.includes(product.id));
    alert(`Selected products: ${selectedProducts.map(p => p.productName).join(', ')}`);
  };

  const handleUncheckAll = () => {
    setCheckedItems({
      golfsticknew: false,
      golfclothesmen: false,
      golfbag: false
    });
  };

  return (
    <div className="container-fluid" style={{height: '100%'}}>
        <div className="row m-0 p-0" style={{flexDirection: 'column', justifyContent: 'space-between'}}>
      <Collapsible trigger="Click to open search options" className="mb-3 ml-0">
      <div className="container">
        <ul className="list-group">
            {Object.keys(checkedItems).map((key) => (
            
                <li key={key} className="list-group-item">
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name={key}
                    checked={checkedItems[key]}
                    onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor={key}>
                    {key}
                    </label>
                </div>
                </li>
            ))}
            </ul>
            </div>
      </Collapsible>
      <div className="d-flex" style={{marginTop:'20px'}}>
        <div className="col-md-6 m-o p-0">
        <button onClick={handleSearch} style={{width: "100%", height:  '30px', backgroundColor: '#ff3131', border: 'none', color: '#fff', fontWeight: 'bold'}}>Search</button>
        </div>
        <div className="col-md-6 m-0 p-0">
        <button onClick={handleUncheckAll} style={{width: "100%", height:  '30px', backgroundColor: '#ccc', border: 'none', color: '#fff', fontWeight: 'bold'}}>Uncheck All</button>
        </div>
      </div>
        </div>
    </div>
  );
};

