import React, { useState, useEffect } from 'react';

const AlertComponent = ({message}) => {

  return (
    <div>
      <div className="alert-container">
        <div className='alert-box'>
        <i className="fa-solid fa-cart-shopping ml-4" style={{color: "#fff", fontSize: '5rem'}} />
        <i class="fa-solid fa-circle-check" style={{color: "#fff", fontSize: '3rem', color: '#ff3131', position: 'relative', right: 25, top: -20}}></i>
        <div className='mt-3' style={{fontSize: '1.4rem'}}>{message} </div>
        </div>
    </div>
    </div>
  );
};

export default AlertComponent;
