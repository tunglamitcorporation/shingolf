import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import FontProvider from './FontProvider';
import DisableArrowScroll from './DisableScroll';
const root = ReactDOM.createRoot(document.getElementById('root'));
import i18n from'./i18n'
import { I18nextProvider } from 'react-i18next';
import DisableTouchPadHorizontalScroll from './DisableTouchPadScroll';
import { ProductHistoryProvider } from './ProductHistoryContext';
import { CartProvider } from './CartProvider';

root.render(
  // <React.StrictMode>
  <ProductHistoryProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <FontProvider>
              <CartProvider>
              <DisableArrowScroll>
                <DisableTouchPadHorizontalScroll>
                <App />
                </DisableTouchPadHorizontalScroll>
              </DisableArrowScroll>
              </CartProvider>
            </FontProvider>
        </I18nextProvider>
      </BrowserRouter>
      </ProductHistoryProvider>
  // </React.StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
