import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { useEffect,  useState, useContext} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";
import ProductHistoryContext from "../../ProductHistoryContext";

const productData = [
  {
    id: 'golfsticknew',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
  {
    id: 'golfsticknew',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
  {
    id: 'golfsticknew',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
  {
    id: 'golfsticknew',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
   {
     id:'golfclothesmen',
     productName: 'Áo Mens UA Matchplay Stripe Polo',
     image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
    price: 3500000,
    sale: 2847500,
    rate: 4,
    productType:'Like New'


   },
   {
    id:'golfclothesmen',
    productName: 'Áo Mens UA Matchplay Stripe Polo',
    image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
   price: 3500000,
   sale: 2847500,
   rate: 4,
   productType:'Like New'


  },
  {
    id:'golfclothesmen',
    productName: 'Áo Mens UA Matchplay Stripe Polo',
    image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
   price: 3500000,
   sale: 2847500,
   rate: 4,
   productType:'Like New'


  },
  {
    id:'golfclothesmen',
    productName: 'Áo Mens UA Matchplay Stripe Polo',
    image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
   price: 3500000,
   sale: 2847500,
   rate: 4,
   productType:'Like New'


  },
   {
     id:'golfbag',
     productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
     image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
     price: 5000000,
    sale: 4750000,  
    rate: 3,
    productType:'Outlet'


   },
   {
    id:'golfbag',
    productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
    image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
    price: 5000000,
   sale: 4750000,  
   rate: 3,
   productType:'Outlet'


  },
  {
    id:'golfbag',
    productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
    image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
    price: 5000000,
   sale: 4750000,  
   rate: 3,
   productType:'Outlet'


  },
  {
    id:'golfbag',
    productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
    image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
    price: 5000000,
   sale: 4750000,  
   rate: 3,
   productType:'Outlet'


  }

  ]
export default function Feature() {
  const { t } = useTranslation();
  const { productName } = useParams();
  const location = useLocation();
  const { price, sale, image, rate, productType, id} = location.state || {};
  const { productHistory } = useContext(ProductHistoryContext);

  // const [activeDiv1, setActiveDiv1] = useState(null);
  // const [activeDiv2, setActiveDiv2] = useState(null);
  // const [activeDiv3, setActiveDiv3] = useState(null);

  // const handleClickDiv1 = (index) => {
  //   setActiveDiv1(index);
  // };

  // const handleClickDiv2 = (index) => {
  //   setActiveDiv2(index);
  // };

  // const handleClickDiv3 = (index) => {
  //   setActiveDiv3(index);
  // };
  const StarRating = ({ rate }) => {
    const renderStars = (rate) => {
      const stars = [];
      for (let i = 0; i < rate; i++) {
        stars.push(
          <i
            key={i}
            style={{ fontSize: '1.4rem', color: '#fec800', marginTop: 10 }}
            className="fa-solid fa-star"
          ></i>
        );
      }
      return stars;
    };
  
    return (
      <div>
        {renderStars(rate)}
      </div>
    );
  };
  const handleProduct = (product) => {
    addProductToHistory(product);
    const formattedProductName = formatProductName(product.productName);
    navigate(`/feature/${formattedProductName}`, { state: { price: product.price, productId: product.id, sale: product.sale, rate: product.rate, image: product.image, productType: product.productType }});
  };
  return (
    <div>
      <HelmetLayout />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="re__breadcrumb">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <i className="fa-solid fa-house"></i>
                  <Link to="/"></Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__title" to="/feature/">
                    Sản phẩm
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__characteristic">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
              <img src={image[0]} />
              <img src={image[1]} />
              <img src={image[1]} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">Còn Hàng</div>
              <div className="content__feature-text d-flex">
                     <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                     <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Độ Loft:  </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>9</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Loại Cán: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>X</li>
                    </ul>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          {/* style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }} */}
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Loại gậy</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Driver</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>45 inch</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>300g</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Bọc đầu gậy</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>?</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Phụ kiện</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>?</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Grip</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>?</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Tay thuận</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Tay Phải</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Rank</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>A</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>2024</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>4356346</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
              The standard Lorem Ipsum passage, used since the 1500s
             <br/> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

             <br/>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
             <br/>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src="https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg"/>
             </div>
           
             <br/> 1914 translation by H. Rackham
             <br/>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src="https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg"/>
             </div>
             <br/> Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
             <br/>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src="https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg"/>
             </div>
             <br/> 1914 translation by H. Rackham
             <br/> "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
                <div className="col-6 col-md-12">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <div href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</div>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-12">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <div href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</div>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-12">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <div href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</div>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>1.000.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-12">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <div href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</div>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>1.000.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
          <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">SẢN PHẨM TƯƠNG TỰ</div>
          <div className="container">
            <div className="row">
              {productData
              .filter(product => product.id == id)
              .map(product => (
                <div key={product.id} className="col-6 col-md-3 p-3">
                <div style={{ textDecoration: 'none' }}>
                  <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                    <div className="content__feature-container">
                      <div
                       onClick={() => handleProduct(product)}
                        className="content__feature-img"
                        style={{
                          backgroundImage:
                          `url(${product.image})`,
                          }}
                      >
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                        <div>Sale</div>
                        <div>{((product.price - product.sale) / product.price * 100).toFixed(0)}%</div>
                        </div>
                      </div>
                    </div>
                    <div style={{padding:'10px'}}>
                    <div className="d-flex justify-content-between align-items-center">
                   <StarRating rate={product.rate} />
                   <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                    </div>
                    <div className="content__feature-name">
                      <div onClick={() => handleProduct(product)}>{product.productName}</div>
                    </div>
                    <div className="content__feature-text d-md-flex justify-content-between">
                      <div className="price">{Intl.NumberFormat('de-DE').format(product.sale)}đ</div>
                      <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                    </div>
                    </div>
                    <div className="btn-container">
                      <div className="row pb-0">
                        <div className="col-md-6 p-0">
                          <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                            THÊM VÀO GIỎ
                          </div>
                        </div>
                        <div className="col-md-6 p-0">
                        <div onClick={() => {
                            addToCart(product)
                            navigate('/cart/')
                            }} className="buy-btn">
                            MUA NGAY
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
              }
            </div>
          </div>
          <div className="content__feature-title">SẢN PHẨM ĐÃ XEM</div>
          <div className="container">
            <div className="row">
            {productHistory.map((product, index) => (
                <div key={product.id} className="col-6 col-md-3 p-3">
                <div style={{ textDecoration: 'none'}}>
                  <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                    <div className="content__feature-container">
                      <div
                       onClick={() => handleProduct(product)}
                        className="content__feature-img"
                        style={{
                          backgroundImage:
                          `url(${product.image})`,
                          }}
                      >
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                        <div>Sale</div>
                        <div>{((product.price - product.sale) / product.price * 100).toFixed(0)}%</div>
                        </div>
                      </div>
                    </div>
                    <div style={{padding:'10px'}}>
                    <div className="d-flex justify-content-between align-items-center">
                   <StarRating rate={product.rate} />
                   <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                    </div>
                    <div className="content__feature-name">
                      <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                    </div>
                    <div className="content__feature-text d-md-flex justify-content-between">
                      <div className="price">{Intl.NumberFormat('de-DE').format(product.sale)}đ</div>
                      <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                    </div>
                    </div>
                    <div className="btn-container">
                      <div className="row pb-0">
                        <div className="col-md-6 p-0">
                          <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                            THÊM VÀO GIỎ
                          </div>
                        </div>
                        <div className="col-md-6 p-0">
                        <div onClick={() => {
                            addToCart(product)
                            navigate('/cart/')
                            }} className="buy-btn">
                            MUA NGAY
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                ))}
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}