import React, { useEffect, useState, useContext, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import ProductHistoryContext from "../../ProductHistoryContext";
import { useCart } from "../../CartProvider";
import AlertComponent from "../../Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Collapsible from "react-collapsible";
const brand = [
  {
    image: '/brand/yamaha.jpg',
    brand:"YAMAHA",
    category:"Gậy golf cũ",
  },
  {
    image: '/brand/titleist.jpg',
    brand:"TITLEIST",
    category:"Gậy golf cũ",
  },
  {
    image: '/brand/taylor.jpg',
    brand:"TAYLORMADE",
    category:"Gậy golf cũ",
  },
  {
    image: '/brand/ping.jpg',
    brand:"PING",
    category:"Gậy golf cũ",
  },
  {
    image: '/brand/odyssey.jpg',
    brand:"ODYSSEY",
    category:"Gậy golf cũ",
  },
  {
    image: '/brand/mizuno.jpg',
    brand:"MIZUNO",
    category:"Gậy golf cũ",
  },
  {
    image: '/brand/honma.jpg',
    brand:"HONMA",
    category:"Gậy golf cũ",
  },
  {
    image: '/brand/dunlop.jpg',
    brand:"DUNLOP",
    category:"Gậy golf cũ",
  },
  {
    image: '/brand/callaway.jpg',
    brand:"CALLAWAY",
    category:"Gậy golf cũ",
  },
  {
    image: '/brand/bridgestone.jpg',
    brand:"BRIDGESTONE",
    category:"Gậy golf cũ",
  },
  
]


const golfType = [
  {
    image: '/golftype/driver.jpg',
    type:"Gậy Driver",
    category:"Gậy golf cũ",
  },
  {
    image: '/golftype/wood.jpg',
    type:"Gậy gỗ",
    category:"Gậy golf cũ",
  },
  {
    image: '/golftype/rescue.jpg',
    type:"Gậy Rescue",
    category:"Gậy golf cũ",
  },
  {
    image: '/golftype/setiron.jpg',
    type:"Set gậy sắt",
    category:"Gậy golf cũ",
  },
  {
    image: '/golftype/wedge.jpg',
    type:"Gậy Wedge",
    category:"Gậy golf cũ",
  },
  {
    image: '/golftype/iron.jpg',
    type:"Gậy sắt lẻ",
    category:"Gậy golf cũ",
  },
  {
    image: '/golftype/putter.jpg',
    type:"Gậy Putter",
    category:"Gậy golf cũ",
  },
  {
    image: '/golftype/shaft.jpg',
    type:"Shaft gậy",
    category:"Shaft gậy",
  },
]

export default function VietnamService({ fetchData, listMenu }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { productName } = useParams();
  const location = useLocation();
  const { price, id, selectedCategories = [] } = location.state || {};
  const [selectedCategory, setSelectedCategory] = useState(id || 'oldgolfclub');
  const [selectedProductId, setSelectedProductId] = useState('')
  const [sortOrder, setSortOrder] = useState('none'); 
  const [searchQuery, setSearchQuery] = useState([]);
  const [matchingData, setMatchingData] = useState([]); 
  const [sortCriteria, setSortCriteria] = useState('price');
  const [selectedBrand, setSelectedBrand] = useState('')
  const [visible, setVisible] = useState(true);
  const { addProductToHistory } = useContext(ProductHistoryContext);
  const { addToCart } = useCart();
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false); 
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null)
  const [modalShow, setModalShow] = useState(false);

  const filteredStickHardType = fetchData.filter(item => item.stickhardtype.type1 !== '' || item.stickhardtype.type2 !== '' || item.stickhardtype.type3 !== '')
  const stickHardTypes = filteredStickHardType.map(item => item.stickhardtype);

  const filteredLoft = fetchData.filter(item => item.loft.loft1 !== '' || item.loft.loft2 !== '' || item.loft.loft3 !== '')
  const loft = filteredLoft.map(item => item.loft);

const mergeStickHardType = (arr) => {
  const stickHardTypeValue = arr.flatMap(item => [item.type1, item.type2, item.type3]);

  const uniqueValues = Array.from(new Set(stickHardTypeValue.filter(value => value !== "")));

  return uniqueValues;
};
const stickHardTypeData = mergeStickHardType(stickHardTypes);

const mergeLoft = (arr) => {
  const loftValue = arr.flatMap(item => [item.loft1, item.loft2, item.loft3]);

  const uniqueValues = Array.from(new Set(loftValue.filter(value => value !== "")));

  return uniqueValues;
};
const loftData = mergeLoft(loft)

  function SearchModal(props) {
    const [active, setActive] = useState(Array(brand.length).fill(false))
    const [active2, setActive2] = useState(Array(golfType.length).fill(false))
    const [active3, setActive3] = useState(Array(golfType.length).fill(false))
    const [active4, setActive4] = useState(Array(golfType.length).fill(false))
    const [selectedProductType, setSelectedProductType] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedStickHardType, setSelectedStickHardType] = useState([]);
    const [selectedLoft, setSelectedLoft] = useState([]);

    const handleClick = (item,index) => {
     const newActiveIndices = [...active];
     newActiveIndices[index] = !newActiveIndices[index];
    setActive(newActiveIndices);
    setSelectedBrand(prevValue => [...prevValue, item.brand])
   };
   const handleDoubleClick = (index) => {
     const newActiveIndices = [...active];
     newActiveIndices[index] = false;
     setActive(newActiveIndices);
   };
   const handleClick2 = (item, index) => {
     const newActiveIndices = [...active2];
     newActiveIndices[index] = !newActiveIndices[index];
    setActive2(newActiveIndices);
    setSelectedProductType(prevValue => [...prevValue, item.type])
   };
   const handleDoubleClick2 = (index) => {
     const newActiveIndices = [...active2];
     newActiveIndices[index] = false;
     setActive2(newActiveIndices);
   };
   const handleClick3 = (item, index) => {
    const newActiveIndices = [...active3];
    newActiveIndices[index] = !newActiveIndices[index];
   setActive3(newActiveIndices);
   setSelectedStickHardType(prevValue => [...prevValue, item])
  };
  const handleDoubleClick3 = (index) => {
    const newActiveIndices = [...active3];
    newActiveIndices[index] = false;
    setActive3(newActiveIndices);
  };
  const handleClick4 = (item, index) => {
    const newActiveIndices = [...active4];
    newActiveIndices[index] = !newActiveIndices[index];
   setActive4(newActiveIndices);
   setSelectedLoft(prevValue => [...prevValue, item])
  };
  const handleDoubleClick4 = (index) => {
    const newActiveIndices = [...active3];
    newActiveIndices[index] = false;
    setActive4(newActiveIndices);
  };
  
  const searchCondition = (selectedProductType, selectedBrand, selectedStickHardType, selectedLoft) => {
    const conditions = [
      { key: 'productType', value: selectedProductType, nestedKey: [] },
      { key: 'brand', value: selectedBrand, nestedKey: [] },
      { key: 'stickhardtype', value: selectedStickHardType, nestedKey: [['type1', 'type2', 'type3']] },
      { key: 'loft', value: selectedLoft, nestedKey: [['loft1', 'loft2', 'loft3']] },
    ];
  
    const keysGroups = [];
    const valuesGroups = [];
    const nestedKeysGroups = [];
  
    conditions.forEach(condition => {
      if (condition.value && condition.value.length > 0) {
        keysGroups.push([condition.key]);
        valuesGroups.push([condition.value]);
        nestedKeysGroups.push(condition.nestedKey);
      }
    });
  
    if (keysGroups.length > 0) {
      handleSearchProduct(keysGroups, valuesGroups, nestedKeysGroups);
    } else {
      setMatchingData([]); // Clear results if no search criteria
    }
  };
     return (
       <Modal
         {...props}
         size="xl"
         aria-labelledby="contained-modal-title-vcenter"
         centered
         backdrop="static"
         keyboard={false}
       >
         <Modal.Header>
           <Modal.Title id="contained-modal-title-vcenter">
             Tìm kiếm
           </Modal.Title>
           <Button variant="light" onClick={props.onHide}>
             <i class="fa-solid fa-xmark purple"></i>
           </Button>
         </Modal.Header>
         <div className="row">
           <div className="col-md-12">
             <Modal.Body>
             <div>
             <div>Hãng sản xuất
             <div className="container">
               <div className="row">
             {brand.map((item, index) => (
                <div className="col-md-2 col-4">
               <div className="d-flex flex-column m-3 align-items-center justify-content-center" 
               onClick={() => {
                handleClick(item, index)
                // handleSearchProduct(item)
                // handleSearchProduct('brand', item.brand)
              }}
               onDoubleClick={() => handleDoubleClick(index)}
               style={{
                 border: active[index] ? '1px solid #ff3131' : '1px solid #ccc',
                 cursor: 'pointer',
               }}>
                 <img src = {item.image} style={{height: 60}} />
                 <p>{item.brand}</p>
               </div>
                </div>
               ))}
               </div>
               </div>
             </div>
             <div>Loại gậy golf
             <div className="container">
               <div className="row">
             {golfType.map((item, index) => (
              <div className="col-md-2 col-4">
               <div className="d-flex flex-column m-3 align-items-center justify-content-center"
               onClick={() => {
                handleClick2(item, index)
              }}
               onDoubleClick={() => {
                 handleDoubleClick2(index)
               }}
               style={{
                 border: active2[index] ? '1px solid #ff3131' : '1px solid #ccc',
                 cursor: 'pointer',
               }}>
                 <img src = {item.image} style={{height: 80}} />
                 <p>{item.type}</p>
               </div>
              </div>
               ))}
               </div>
               </div>
               <div>Shaft
               </div>
               <div>Loại cán
               <div className="container">
               <div className="row">
                {stickHardTypeData.map((item, index) => (
                   <div className="col-md-2 col-4" style={{width: 120}}>
                   <div className="d-flex flex-column m-3 align-items-center justify-content-center" 
                   onClick={() => {
                    handleClick3(item, index)
                    // handleSearchProduct(item)
                    // handleSearchProduct('brand', item.brand)
                  }}
                   onDoubleClick={() => handleDoubleClick3(index)}
                   style={{
                     border: active3[index] ? '1px solid #ff3131' : '1px solid #ccc',
                     cursor: 'pointer',
                     padding: 5,
                     width: 100,
                     height: 40
                   }}>
                    {item}
                   </div>
                   </div>
                ))}
              </div>
               </div>
               </div>
               <div>Độ loft
               <div className="container">
               <div className="row">
                {loftData.map((item, index) => (
                   <div className="col-md-1 col-4" style={{width: 60}}>
                   <div className="d-flex flex-column m-3 align-items-center justify-content-center" 
                   onClick={() => {
                    handleClick4(item, index)
                    // handleSearchProduct(item)
                    // handleSearchProduct('brand', item.brand)
                  }}
                   onDoubleClick={() => handleDoubleClick4(index)}
                   style={{
                     border: active4[index] ? '1px solid #ff3131' : '1px solid #ccc',
                     cursor: 'pointer',
                     padding: 5,
                     width: 40,
                     height: 40
                   }}>
                    {item}
                   </div>
                   </div>
                ))}
              </div>
               </div>
               </div>
             </div>
               </div>
               <div className="w-100 d-flex justify-content-center">
               <button
                     id="send"
                     class="send-btn"
                     type="submit"
                     style={{height: 30, width: 80}}
                     onClick={() => {
                      searchCondition(selectedProductType, selectedBrand, selectedStickHardType, selectedLoft); 
                      setModalShow(false)
                     }}
                   >
                     <span class="text" style={{ color: "#fff" }}>
                     Tìm kiếm
                     </span>
                   </button>
               </div>
             </Modal.Body>
           </div>
         </div>
       </Modal>
     );
   }
 
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setShowSearch(true)
  };
  const handleProductCtrl = (product) => {
    setSearchTerm('')
    setShowSearch(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [show]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShow(true);
  };

  const convertListMenu = [];
  for (const [title, items] of Object.entries(listMenu)) {
    items.forEach((item, index) => {
      if (index === 0) {
        convertListMenu.push({ title, item });
      } else {
        convertListMenu.push({ title: '', item });
      }
    });
  }
  const filteredProducts = selectedCategories.length > 0
    ? fetchData.filter(product => selectedCategories.includes(product.productType))
    : fetchData.filter(product => product.productId === selectedCategory || product.category === selectedCategory || product.brand === selectedCategory );

  const handleCategoryClick = ([category, item]) => {
      const selectedProduct = item;
      const selectedProductTitle = category
      setSelectedCategory(''); 
      setVisible(false); 
      setTimeout(() => {
        setSelectedCategory(selectedProduct);
        setSelectedProductId(selectedProductTitle)
      }, 0);
    };

  const formatProductName = (name) => {
    return name.replace(/\s/g, '-');
  };

  const handleProduct = (product) => {
    addProductToHistory(product);
    const formattedProductName = formatProductName(product.productName);
    navigate(`/product/${formattedProductName}`, {
      state: {
        price: product.price,
        productId: product.productId,
        sale: product.saleprice,
        rate: product.rate,
        productType: product.productType,
        status: product.status,
        amount: product.amount,
        loft: product.loft,
        stickType: product.sticktype,
        stickHardType: product.stickhardtype,
        feature: product.feature,
        long: product.long,
        weight: product.weight,
        stickCover: product.stickcover,
        accessory: product.accessory,
        grip: product.grip,
        hand: product.hand,
        rank: product.rank,
        produceYear: product.produceyear,
        manageNumber: product.managenumber,
        size: product.size,
        shoesType: product.shoestype,
        sex: product.sex,
        brand: product.brand,
        produceLocation: product.producelocation,
        guarantee: product.guarantee,
        color: product.color,
        material: product.material,
        content: product.content,
        images: product.images,
        productCode: product.productCode,
      }
    });
  };

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

  const checkId = (id) => {
    switch (id) {
      case 'newgolfclub': return "Gậy Golf Mới"
      case 'oldgolfclub': return "Gậy Golf Cũ"
      case 'golfset': return "Bộ Gậy Giá Rẻ"
      case 'accessories': return "Phụ Kiện Golf"
      case 'mengolfclothes': return "Quần Áo Golf Nam"
      case 'womengolfclothes': return "Quần Áo Golf Nữ"
    }
  }


    const handleSearchProduct = (keysGroups, valuesGroups, nestedKeysGroups = []) => {
      const updatedQuery = [];
    
      keysGroups.forEach((keysGroup, groupIndex) => {
        keysGroup.forEach((key, keyIndex) => {
          updatedQuery.push({
            key, // The main key (e.g., stickhardtype, loft, brand, productType)
            value: valuesGroups[groupIndex][keyIndex], // The values for the main key
            nestedKey: nestedKeysGroups[groupIndex] ? nestedKeysGroups[groupIndex][keyIndex] || [] : [] // The nested keys if available
          });
        });
      });
    
      setSearchQuery(updatedQuery);
      checkMatch(updatedQuery);
    };
    
  
    // Function to check and store matching data
   
    const checkMatch = (query) => {
      const matchedItems = fetchData.filter(dbItem =>
        query.every(queryItem => {
          if (Array.isArray(queryItem.nestedKey) && queryItem.nestedKey.length > 0) {
            // Check if any of the nested keys match any of the values
            return queryItem.nestedKey.some(nestedKey =>
              queryItem.value.includes(dbItem[queryItem.key]?.[nestedKey])
            );
          }
    
          // Handle non-nested cases
          if (Array.isArray(queryItem.value)) {
            // If the value is an array, check if it includes the item's property value
            return queryItem.value.includes(dbItem[queryItem.key]);
          }
    
          // Direct comparison for non-array values
          return dbItem[queryItem.key] === queryItem.value;
        })
      );
      setMatchingData(matchedItems); // Update the matching data state
      applySort(matchedItems); // Apply sorting to filtered data
    };

    const applySort = (data) => {
      const sortedItems = [...data].sort((a, b) => {
        if (sortCriteria === 'price') {
          if (sortOrder === 'asc') {
            return a.price - b.price;
          } else if (sortOrder === 'desc') {
            return b.price - a.price;
          }
        } else if (sortCriteria === 'rate') {
          if (sortOrder === 'asc') {
            return (a.rate || 0) - (b.rate || 0);
          } else if (sortOrder === 'desc') {
            return (b.rate || 0) - (a.rate || 0);
          }
        }
        return 0;
      });
      setMatchingData(sortedItems); // Update sorted data
    };
  

    const handleSort = (criteria, order) => {
      setSortCriteria(criteria); // Update sort criteria
      setSortOrder(order); // Update sort order
      applySort(matchingData); // Apply sort to currently filtered data
    };
    useEffect(() => {
      applySort(matchingData);
    }, [searchQuery, fetchData, sortOrder, sortCriteria]);
    
    const initialSearch = () => {
      if (selectedCategory == " ") {
        console.log("Calling handleSearchProduct with oldgolfclub");
        handleSearchProduct([['productId']], [['oldgolfclub']]);
      } else {
        console.log("Calling handleSearchProduct with id:", selectedCategory);
        handleSearchProduct([['productId']], [[selectedCategory]]);
      }
    }
    useEffect(() => {
      console.log("useEffect called");
      console.log("id:", selectedCategory);
    initialSearch()
    }, [selectedCategory]);
  return  (
    <>
      <HelmetLayout title={`Shin Golf  | ${checkId(id) || "Sản phẩm"}`} />
      {show && (
        <AlertComponent message='Đã thêm sản phẩm vào giỏ hàng' />
      )}
      <div className="reservation__content" style ={{backgroundImage: 'url(/webp/golf-bg.jpg)'}}>
              <h1>SẢN PHẨM</h1>
            </div>
      <div className="content__feature m-5">
        <div className="d-flex justify-content-between">
          <div className="list-container" style={{ backgroundColor: '#f6f6f6', width: '20%' }}>
            <div className="container">
              <div className="row">
                <div className="all-list"><i className="fa-solid fa-bars"></i> DANH MỤC</div>
                {Object.entries(listMenu).map(([category, items]) => (
                  <div className="row ml-5 p-0" key={category}>
                    <h3 className="bold mt-3">{category}</h3>
                    <div className="row justify-content-evenly">
                      {items.map(item => (
                        <Link className="list-item" to="#" onClick={() => handleSearchProduct([['productType']], [[item]])}>{item}</Link>
                        // <Link className="list-item" to="#" onClick={() => handleCategoryClick([category, item])}>{item}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
    </div>
          <div style={{ width: '100%' }}>
            <div className="container">
              <div className="row pt-0">
                <div className="col-md-12">
                  <div className="re__breadcrumb mt-0">
                    <ul className="breadcrumb__list">
                      <li className="breadcrumb__item">
                        <Link to="/">
                          <i className="fa-solid fa-house" />
                        </Link>
                      </li>
                      <li className="breadcrumb__item">/</li>
                      <li className="breadcrumb__item">
                        <Link className="breadcrumb__title" to="/product-list/">
                          Sản phẩm
                        </Link>
                      </li>
                      <li className="breadcrumb__item">/</li>
                      <li className="breadcrumb__item">
                        <Link className="breadcrumb__title" to="/product-list/">
                           {checkId(id)}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex">
              <div className="d-flex justify-content-start">
                      <div className="d-flex align-items-center">
                        <div className="search-bar d-flex align-items-center" ref={searchRef}>
                              <input  
                              type="text"
                              placeholder="Tìm kiếm"
                              value={searchTerm}
                              onChange={handleChange}
                              className="input-style"
                              style={{width: '300px', border: '1px solid #ff3131'}}
                            />
                             <div className="search-bar-icon d-flex justify-content-center align-items-center" style = {{border: '1px solid #ff3131'}}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            {showSearch && searchTerm && (
                                <div className="results">
                                  {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                      <div
                                        key={product.productId}
                                        className="productItem"
                                        onClick={() => handleProductCtrl(product)}
                                      >
                                        <div className="d-flex">
                                        <img src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} style={{width: 50, height: 50}} />
                                        <div className="ml-3 search-productName">{product.productName}</div>
                                        </div>
                                        <div className="search-price">Giá: {product.price}¥</div>
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
                <button onClick={() => setModalShow(true)} className="filter-btn"><i class="fa-solid fa-filter" style={{fontSize: '1.4rem'}}></i>Bộ Lọc</button>
                      <SearchModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
              </div>
              <div className="row flex-column">
              <div className="col-md-2 mb-3">
               <select className="form__content select-category" onChange={(e) => {
                          handleSort('price', e.target.value)
                          }}>
                          <option disabled>Sắp xếp</option>
                          <option value="asc">Thấp đến cao</option>
                          <option value="desc">Cao đến thấp</option>
                      </select>
                </div>
                <div className="col-md-2 mb-3">
              <div style={{border: '1px solid #ccc', height: 41, width: 135, fontSize: '1.2rem', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}} onClick={() => handleSort('rate', 'desc')}><div>Xếp hạng tốt nhất</div></div>
                </div>
                <div className="col-md-2 mb-3">
                <div style={{border: '1px solid #ccc', height: 41, width: 135, fontSize: '1.2rem', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}} onClick={() => handleSort('rate', 'desc')}><div>Hàng mới về</div></div>
                </div>
              <div>
              <div className="row">
                    {matchingData.length > 0 ? (
                        matchingData.map(product => (
                          <>
                        <div key={product.productId} className="col-6 col-md-2 mb-4">
                          <div style={{ textDecoration: 'none' }}>
                            <div className="content__feature-item product-container" style={{ overflow: 'hidden'}}>
                              {product.saleprice > 0 && (
                                <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '50px', height: '50px', position: 'absolute', backgroundColor: '#ff3131', color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', zIndex: 999 }}>
                                  <div>Sale</div>
                                  <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                                </div>
                              )}
                              <div className="content__feature-container">
                                <div
                                  onClick={() => handleProduct(product)}
                                  className="content__feature-img"
                                  style={{
                                    backgroundImage: `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png)`,
                                  }}
                                  title={product.productCode}
                                />
                              </div>
                              <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                <div className="d-flex justify-content-between align-items-center">
                                  <StarRating rate={product.rate} />
                                </div>
                                <div className="content__feature-name mt-2">
                                  <div onClick={() => handleProduct(product)}>{product.productName}</div>
                                </div>
                                {product.saleprice > 0 ? (
                                  <div className="content__feature-text d-flex">
                                    <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                                    <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                                  </div>
                                ) : (
                                  <div className="content__feature-text d-flex">
                                    <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                                  </div>
                                )}
                              {product.brand !='' ? 
                                  <div className="product-status">{product.brand}</div>
                                  :''}
                              </div>
                              <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                          </>
                          
                        ))
                      ) : (
                        'Không tìm thấy sản phẩm nào'
                      )}
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
