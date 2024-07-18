import ProductHistoryContext from "../../ProductHistoryContext"
import { useContext } from "react";
export default function SeenProduct() {
    const { productHistory } = useContext(ProductHistoryContext);
    const { addProductToHistory } = useContext(ProductHistoryContext);
    const handleProduct = (product) => {
        addProductToHistory(product);
        const formattedProductName = formatProductName(product.productName);
        navigate(`/product/${formattedProductName}`, { state: { price: product.price, productId: product.productId, sale: product.saleprice, rate: product.rate, image: product.image, productType: product.productType }});
      };
    const handleAddToCart = (product, productSelect1, productSelect2) => {
        addToCart(product, productSelect1, productSelect2)
        setShow(true)
      }
      const StarRating = ({ rate }) => {
        const fullStars = Math.floor(rate);
        const halfStar = rate % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
          <div>
            {[...Array(fullStars)].map((_, index) => (
              <i
                key={index}
                style={{ fontSize: '1rem', color: '#fec800', marginTop: 10 }}
                className="fa-solid fa-star"
              ></i>
            ))}
            {halfStar && (
              <i
                style={{ fontSize: '1rem', color: '#fec800', marginTop: 10 }}
                className="fa-solid fa-star-half-alt"
              ></i>
            )}
            {[...Array(emptyStars)].map((_, index) => (
              <i
                key={fullStars + index + 1}
                style={{ fontSize: '1rem', color: '#dcdcdc', marginTop: 10 }}
                className="fa-solid fa-star"
              ></i>
            ))}
          </div>
        );
      };
    return (
        <>
          <div className="content__feature-title">SẢN PHẨM ĐÃ XEM</div>
          <div className="container">
            <div className="row">
            {productHistory.map((product, index) => (
               <div key={product.productId} className="col-6 col-md-2 p-3">
               <div style={{ textDecoration: 'none' }}>
                 <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                 {product.saleprice > 0 ? (
                       <div className="d-flex flex-column justify-content-center align-items-center sale-badge">
                       <div>Sale</div>
                       <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                       </div>
                       ) : ''} 
                   <div className="content__feature-container">
                     <div
                      onClick={() => handleProduct(product)}
                       className="content__feature-img"
                       style={{
                         backgroundImage:
                         `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png)`,
                         }}
                         title={product.productCode}
                     >
                     </div>
                   </div>
                   <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
                   <div className="d-flex justify-content-between align-items-center">
                  <StarRating rate={product.rate} />
                  {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
                   </div>
                   <div className="content__feature-name mt-2">
                     <div onClick={() => handleProduct(product)}>{product.productName}</div>
                   </div>
                   {product.saleprice > 0 ? (
                   <div className="content__feature-text d-flex">
                     <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                     <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </div>
                   ): (
                     <div className="content__feature-text d-flex">
                     <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </div>
                   )}
                   </div>
                   <div className="btn-container">
                     <div className="row pb-0">
                       <div className="col-md-12 p-0">
                         <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                           THÊM VÀO GIỎ
                         </div>
                       </div>
                      {/* <div className="col-md-6 p-0">
                       <a 
                         target="_blank"
                         href="https://zalo.me/0564545545"
                         className="buy-btn">
                         LIÊN HỆ
                       </a>
                       </div> */}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
                ))}
            </div>
          </div>
        </>
    )
}