import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx?b=8');
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, 'application/xml');
        const rates = Array.from(xml.getElementsByTagName('Exrate'));
        const usdRate = rates.find(rate => rate.getAttribute('CurrencyCode') === 'JPY');
        setExchangeRate(usdRate.getAttribute('Sell'));
      } catch (error) {
        setError('Error fetching exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  const containerStyle = {
    background: '#fff',
    padding: '20px',
    textAlign: 'center'
  };

  if (loading) {
    return <div style={containerStyle}>Loading...</div>;
  }

  if (error) {
    return <div style={containerStyle}>{error}</div>;
  }

  return (
    <div style={containerStyle}>
      <h1>Exchange Rate: JPY to VND</h1>
      <p>{exchangeRate}</p>
    </div>
  );
};

export default ExchangeRate;
