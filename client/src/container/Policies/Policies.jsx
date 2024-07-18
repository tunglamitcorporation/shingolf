import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
const demoData = [
{
    orderID: '1234567890',
    customerName: 'Tung Lam',
    customerEmail: 'tunglam@gmail.com',
    customerPhone: '0987654321',
    customerAddress: '123 Main St',
    orderDate: '2022-01-01',
    products: [
        {
            name:"Product 1",
            select1: 'select1',
            select2: 'select2',
            price:'10000',
            exchangeRate:'165'
        }
    ]

}
]
function censorName(name) {
    const firstChar = name.charAt(0);
    const lastChar = name.charAt(name.length - 1);
    const middle = '*'.repeat(name.length - 2);
    return `${firstChar}${middle}${lastChar}`;
  }
  function censorPhoneNumber(phoneNumber, visibleDigits = 3, censorChar = '*') {
    const length = phoneNumber.length;
    const censoredPart = censorChar.repeat(length - visibleDigits);
    const visiblePart = phoneNumber.slice(-visibleDigits);
    return `${censoredPart}${visiblePart}`;
  }
  function censorEmail(email) {
    const [localPart, domain] = email.split('@');
    const firstChar = localPart.charAt(0);
    const censoredPart = '*'.repeat(localPart.length - 1);
    return `${firstChar}${censoredPart}@${domain}`;
  }
export default function Policies({fetchData}){
    const {t} = useTranslation()
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
      const filterProducts = (data, term) => {
        const lowercasedTerm = term.toLowerCase();
        return data.filter((product) =>
          product.productName.toLowerCase().includes(lowercasedTerm)
        );
      };
    
      const filteredProducts = filterProducts(fetchData, searchTerm);

    return(
        <div> 
            <HelmetLayout title={"Shin Golf  | Kiểm tra đơn hàng"}  />
            <div className="policies__header">
                    <div classNameName="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>KIỂM TRA ĐƠN HÀNG</h1>
                            </div>
                        </div>
                    </div>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="re__breadcrumb">
                        <ul className="breadcrumb__list">
                                   <li className = "breadcrumb__item">
                                       <Link  to="/">
                                           <i className="fa-solid fa-house"></i>
                                       </Link>
                                   </li>
                                   <li className = "breadcrumb__item">
                                       /
                                   </li>
                                   <li className = "breadcrumb__item">
                                       <Link className ="breadcrumb__title" to = '/check-order/'>Kiểm tra đơn hàng</Link>
                                </li>
                       </ul>
                       </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="search-bar d-flex align-items-center" style={{height: '300px'}}>
                              <input  
                              type="text"
                              placeholder="Nhập mã đơn hàng của bạn"
                              value={searchTerm}
                              onChange={handleChange}
                              className="input-style2"
                            />
                             <div className="search-bar-icon2 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                <div className="row">
                {/* {demoData.map(item => (
                                <div className="order-info">
                                <div className="customer-info">
                                <p>Tên khách hàng: {censorName(item.customerName)}</p>
                                <p>Số điện thoại: {censorPhoneNumber(item.customerPhone)}</p>
                                <p>Email: {censorEmail(item.customerEmail)}</p>
                                </div>
                                {item.products.map(product => (

                                ))}
                                  <div className="product-info">
                                  </div>
                                <div className="noProducts">Không tìm thấy đơn hàng</div>
                            </div>
                            ))} */}
                </div>
                </div>
            </div>
       
    )
}                   