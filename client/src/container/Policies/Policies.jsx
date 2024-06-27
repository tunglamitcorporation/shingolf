import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'
import { useState } from 'react';
 
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";

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
    // const a = t("header.policies")
    // const b = t("header.title")
    // const c = a + " | "+ b

    return(
        <div> 
            <HelmetLayout  />
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
                              {searchTerm && (
                                <div className="results">
                                  {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                      <div
                                        key={product.id}
                                        className="productItem"
                                        onClick={() => handleProduct(product)}
                                      >
                                        <div className="search-productName">{product.productName}</div>
                                        <div className="search-price">${product.price}</div>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="noProducts">No products found</div>
                                  )}
                                </div>
                              )}
                        </div>
                        </div>
                    </div>
                </div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content__policies">
                        {faq.map((item)=>(
                            <>
                            <div className='display-4 faq-title'>{item.title}</div>
                                <Collapsible className='mt-3' trigger={item.question}>
                                    <div className="contract-text pre-line">
                                    <p>{item.answer}</p>
                                </div>
                                </Collapsible>
                        </>
                                ))}
                        </div>
                    </div>
                </div>
                </div>     */}
            </div>
       
    )
}                   