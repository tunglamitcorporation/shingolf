import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    rate: 4,
  },
  {
    id: 'golfbag',
    productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
    image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
    price: '60',
    rate: 3,
  }
];

const RankTable = () => {
  // Sort products by rate in descending order
  const sortedData = [...productData].sort((a, b) => b.rate - a.rate);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product Rank Cards</h2>
      <div className="row">
        {sortedData.map((product, index) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card position-relative">
              <img src={product.image} className="card-img-top" alt={product.productName} />
              <span className="badge badge-primary position-absolute d-flex align-items-center justify-content-center" style={{width:'40px', height: '40px', fontSize: '1.6rem', backgroundColor: '#ff3131'}}>{index + 1}</span>
              <div className="card-body">
                <div className="content__feature-name"><div>{product.productName}</div></div>
                <p className="">Price: ${product.price}</p>
                <p className="">Rating: {product.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankTable;
