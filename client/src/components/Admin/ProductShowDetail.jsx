import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form, Container, Row, Col, Alert } from 'react-bootstrap';
import './adminComponets.css'
function ProductShowDetail(props) {
    // const {listMenu} = props;
   // const LIST_SELECT_PRODUCT_ID =  ['golfsticknew', 'golfstickold', 'golfstickhangle', 'golfclothesmen', 'golfclotheswwomen', 'golfacessory', 'golfbag', 'golfshoes', 'golfpractice'];
    const LIST_SELECT_PRODUCT_ID =["newgolfclub", "oldgolfclub", "grip", "mengolfclothes", "womengolfclothes", "accessories", "golfbag", "golfshoes", "golftraining"];
    const LIST_SELECT_PRODUCT_CODE=  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const dateByNumber = Date.now();
    const [data, setData] =useState({
      productDetail: {
        "productCode": "* Waiting make product *",
        "productId": "",
        "category": "",
        "productType": "",
        "productName": "",
        // "productImage": [],
        "status": "",
        "amount": 0,
        "price": 0,
        "saleprice": 0,
        "rate": 0,
        "loft": {
          "loft1": "",
          "loft2": "",
          "loft3": "",
        },
        "sticktype": "",
        "stickhardtype": "",
        "feature": "",
        "long": "",
        "weight": "",
        "stickcover": "",
        "accessory": "",
        "grip": "",
        "hand": "",
        "rank": "",
        "produceyear": "",
        "managenumber": "",
        "size": "",
        "shoestype": {
          "type1": "",
          "type2": "",
          "type3": "",
        },
        "sex": "",
        "brand": "",
        "producelocation": "",
        "guarantee": "",
        "color": {
          "color1": "",
          "color2": "",
          "color3": "",
          "color4": ""
        },
        "material": "",
        "content": {
          "content1": "",
          "content2": "",
          "content3": "",
          "content4": ""
        },
        "images": {
          "image1": "",
          "image2": "",
          "image3": "",
          "image4": ""
        }
        },
      showNew: {
        category: {
          isShow: false,
          value: "",
        },
        productType: {
          isShow: false,
          value: "",
        }
      },
      listMenu: {}
    }
      );
      const [file, setFile] = useState(null);

      useEffect(() => {
        if(props.listMenu) {
          
          if(Object.keys(props.listMenu).length >0) {
            const newData = {...data};
              newData.listMenu = props.listMenu;

            if(Object.keys(props.productDetail).length > 0) {
             // newData.productDetail = props.productDetail;

             console.log("props.productDetail", props.productDetail)
              newData.productDetail =  {
                "productCode":  props.productDetail.productCode,
                "productId": props.productDetail.productId,
                "category": props.productDetail.category,
                "productType": props.productDetail.productType,
                "productName": props.productDetail.productName,
                "status": props.productDetail.status,
                "amount": props.productDetail.amount,
                "price": props.productDetail.price,
                "saleprice": props.productDetail.saleprice,
                "rate": props.productDetail.rate,
                "loft": props.productDetail.loft,
                "sticktype": props.productDetail.sticktype,
                "stickhardtype": props.productDetail.stickhardtype,
                "feature": props.productDetail.feature,
                "long": props.productDetail.long,
                "weight": props.productDetail.weight,
                "stickcover": props.productDetail.stickcover,
                "accessory": props.productDetail.accessory,
                "grip": props.productDetail.grip,
                "hand": props.productDetail.hand,
                "rank": props.productDetail.rank,
                "produceyear": props.productDetail.produceyear,
                "managenumber": props.productDetail.managenumber,
                "size": props.productDetail.size,
                "shoestype": props.productDetail.shoestype,
                "sex": props.productDetail.sex,
                "brand": props.productDetail.brand,
                "producelocation": props.productDetail.producelocation,
                "guarantee": props.productDetail.guarantee,
                "color": props.productDetail.color,
                "material": props.productDetail.material,
                "content": props.productDetail.content,
                "images": props.productDetail.images,
                }
            } else {
              newData.productDetail.productCode = "* Waiting make product *";
              newData.productDetail.category = Object.keys(props.listMenu)[0];
              newData.productDetail.productId = LIST_SELECT_PRODUCT_ID[0];
              newData.productDetail.productType = props.listMenu[""+Object.keys(props.listMenu)[0]][0];


            }
            
            setData(newData);
          }
        }
      },[props.listMenu, props])


      function onConfirmHide() {
        if(data.productDetail.productname !=="" && data.productDetail.productCode === "* Waiting make product *") {
          if (confirm("Do you want cancel when input data ? \nBạn có muốn thoát khi đang nhập liệu?")) {
             props.onHide()
          } else {
            
          }

        } else props.onHide()
      }

      function onChangeInput(area, target, value, option) {
        const newData = {...data};

        console.log("targe", target)
        console.log("option", option)

        if(typeof option === "number" || typeof option === "string") {
          console.log("targe 1", target)
          console.log("option 1", option)

          newData[area][target][option] = value;
          setData(newData);
        } else {
          newData[area][target] = value;
          setData(newData);
        }
      }

      function addNewItemToListMenu(key) {
        let newData = {...data};
        newData.showNew[key].isShow = false;

        if(key === "productType") {
          newData.listMenu[data.productDetail.category].push(newData.showNew[key].value);
        } else {
          newData.listMenu[""+newData.showNew[key].value] = [];
          data.productDetail.category = newData.showNew[key].value
          // newData.productDetail[key] = newData.showNew[key].value;
        }

        console.log("listMenu", newData.listMenu)
        setData(newData);

      }
      
      function capitalize(str){
          return str.charAt(0).toUpperCase() + str.slice(1);
      }

      function checkName(key) {
        switch(key) {
          case "productName": return "Product Name";
          case "productname": return "Product Name";
          case "productCode": return "Product Code";
          case "productId": return "Product Show";
          case "sticktype": return "Stick Type";
          case "stickhardtype": return "Stickhard Type";
          case "produceyear": return "Produce Year";
          case "managenumber": return "Manage Number";
          case "shoestype": return "Shoes Type";
          case "producelocation": return "Produce Location";
          case "productImage": return "Product Image"
          default: return capitalize(key);
        }
      }

        // Hàm để xử lý khi người dùng chọn ảnh
      //   const handleImageChange = (event) => {
      //     const file = event.target.files[0];
      //     if (file) {
      //     const reader = new FileReader();
      //     reader.onloadend = () => {
      //         setSelectedImage(reader.result);
      //     };
      //     reader.readAsDataURL(file);
      //     }
      // };


      // Hàm để xử lý khi người dùng chọn ảnh
      // const handleImageChange = (event) => {
      //     const file = event.target.files[0];
      //     if (file) {
      //     const reader = new FileReader();
      //     reader.onloadend = () => {
      //         setSelectedImage(reader.result);
      //     };
      //     reader.readAsDataURL(file);
      //     }
      // };
  
      
  const handleFileChange = (e) => {
      // if (Number(branchID) === 15)
      // else setFile(e.target.files[0]);    
      handleImageChange(e)    
  };
  
  const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
              const canvas = document.createElement("canvas");    
              const MAX_WIDTH = 1500; // Set maximum width for the resized image
              const scaleFactor = MAX_WIDTH / img.width;
              canvas.width = MAX_WIDTH;
              canvas.height = img.height * scaleFactor;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            //  const resizedDataURL = canvas.toDataURL("image/png");
              let resizedDataURL 
              canvas.toBlob((blob) => {
                  resizedDataURL = new File([blob], "fileName.jpg", { type: "image/jpeg" })
                  setFile(resizedDataURL);
              }, 'image/jpeg');
          };
          img.src = e.target.result;
      };
      reader.readAsDataURL(file);
  };
  
  const handleUploadPassport = async (link,name) => {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch(`/upload${link}/${name}`, { //+dataState._id
          method: 'POST',
          body: formData,
        });
  
        // console.log("response", response);
  
      } catch (error) {
        console.error('Lỗi kết nối máy chủ:', error);
      }
  };

      function renderContent(dataRender, key) {
        let result = [];

        Object.keys(dataRender).forEach((item, index) => {
          result.push( <Form.Group as={Row} key={item} className="d-flex">
            <Form.Label column sm={2} style={{fontSize:'1.6rem', backgroundColor:"yellow", fontWeight:'600'}}>
                {checkName(item)}
              </Form.Label>
             <Form.Control type={"text"}
                          style={{width:'70%',fontSize:'1.4rem'}} 
                          value={data.productDetail[key][item]}
                          placeholder={`Enter item`} 
                          onChange = {e => onChangeInput("productDetail", key, e.target.value, item)}/>
           </Form.Group>)
        })

        return result;
      }
      
    function renderListSelect(dataRender, target) {
      let result = [];
      // console.log("target", target);
      // console.log("dataRender", dataRender);
      
      if(target === "productType" && !dataRender) {
         dataRender = data.listMenu[Object.keys(data.listMenu)[0]]
      }

      if(dataRender.length > 0) {
        dataRender.forEach(item => {
          result.push(<option value={item} onClick = {()=> onChangeInput("productDetail",target, item)} style={{padding: "8px"}}>{item}</option>)
        })
      }

      return result;
    }

    function renderInputWithKeyArray(key, Row,) {
       switch(key) {
        case "content": case "loft": case "color": case "shoestype": case "stickhardtype": return <Form.Group as={Row} key={key} className="d-flex">
                                  <Form.Label column sm={2} style={{fontSize:'1.6rem', backgroundColor:"aqua", fontWeight:'600'}}>
                                    {checkName(key)}
                                  </Form.Label>
                                  <div>
                                    {renderContent(data.productDetail[key], key)}
                                  </div>
                                </Form.Group>;
        case "productCode": return <Form.Group as={Row} key={key} className="d-flex">
                                      <div>
                                        {renderContent(data.productDetail.productCode)}
                                      </div>
                                    </Form.Group>
        case "size": case "color": return <Form.Group as={Row} key={key} className="d-flex">
                                           </Form.Group>
        
        default: return <Form.Group as={Row} key={key} className="d-flex">
                            <Form.Label column sm={2} style={{fontSize:'1.6rem', backgroundColor:"aqua", fontWeight:'600'}}>
                                {checkName(key)}
                              </Form.Label>

                            {data.productDetail.productCode !== "* Waiting make product *" ? <div className="product_show_detail-content d-flex">

                                <div style={{width:"20%"}} className="mr-2">
                                    <img className="product_show_detail-content-item" src={`https://shingolf.vn/image/product/image/${data.productDetail.productCode}_image1.png?v=${dateByNumber}`}></img>
                                    <input type="file" accept="image/*" onChange={handleFileChange} />
                                    <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image",`${data.productDetail.productCode}_image1`)}>Update Sale</button>
                                </div>

                                <div style={{width:"20%"}} className="mr-2">
                                    <img className="product_show_detail-content-item" src={`https://shingolf.vn/image/product/image/${data.productDetail.productCode}_image2.png?v=${dateByNumber}`}></img>
                                    <input type="file" accept="image/*" onChange={handleFileChange} />
                                    <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image",`${data.productDetail.productCode}_image2`)}>Update Sale</button>
                                </div>

                                <div style={{width:"20%"}} className="mr-2">
                                    <img className="product_show_detail-content-item" src={`https://shingolf.vn/image/product/image/${data.productDetail.productCode}_image3.png?v=${dateByNumber}`}></img>
                                    <input type="file" accept="image/*" onChange={handleFileChange} />
                                    <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image",`${data.productDetail.productCode}_image3`)}>Update Sale</button>
                                  </div>
                            
                                <div style={{width:"20%"}} className="mr-2">
                                    <img className="product_show_detail-content-item" src={`https://shingolf.vn/image/product/image/${data.productDetail.productCode}_image4.png?v=${dateByNumber}`}></img>
                                    <input type="file" accept="image/*" onChange={handleFileChange} />
                                    <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image",`${data.productDetail.productCode}_image4`)}>Update Sale</button>
                                </div>

                                {/* <div style={{width:"20%"}} className="mr-2">
                                    <img className="product_show_detail-content-item" src={`https://shingolf.vn/image/product/image/${ata.productDetail.productCode}_image5.png`}></img>
                                    <input type="file" accept="image/*" onChange={handleFileChange} />
                                    <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image","test5")}>Update Sale</button>
                                </div> */}

                            </div> : <Form.Control type={typeof data.productDetail[key] === "number" ? "number": "text"}
                                                  style={{width:'20%'}} 
                                                  disabled
                                                  placeholder={data.productDetail.productCode} />
                            }
                          </Form.Group>;
       }
    }

    function renderInputWithKeyStringNumber(key, Row) {
      switch(key) {
        case "productCode": return <Form.Control type={typeof data.productDetail[key] === "number" ? "number": "text"}
                                                  style={{width:'20%'}} 
                                                  disabled
                                                  placeholder={data.productDetail[key]} />

        case "category": case "productType": case "productId": return <><select name="cars" id="cars" style={{width:'60%', fontSize:'1.4rem'}} 
                                    onChange={e => onChangeInput("productDetail", key, e.target.value)}>
                            {renderListSelect(key === "category" ? Object.keys(data.listMenu) 
                                                : key === "productType" ? data.listMenu[""+data.productDetail.category] : LIST_SELECT_PRODUCT_ID, key)}
                            </select>
                            {
                            key !=="productId" && <div className="btn btn-primary" style={{width:'20%'}}
                            //   ("showNew","category",true,"ishow")
                                                          onClick = {()=> onChangeInput("showNew", key, true, "isShow")}>{`Add new ${key}`}</div>
                            }
                            {
                            key !=="productId" && data.showNew[key].isShow && <>
                                <input type="text" style={{width:'30%', marginLeft:'220px'}}
                                        onChange = {e => onChangeInput("showNew", key, e.target.value, "value")} />
                                <div className="btn btn-primary" style={{width:'60px'}}
                                        onClick = {() => addNewItemToListMenu(key)}>{`Save ${key}`}</div>
                            </>
                            }

                            </>
          default:  return <Form.Control type={typeof data.productDetail[key] === "number" ? "number": "text"}
                                          style={{width:'70%', fontSize:'1.4rem'}} 
                                          placeholder={`Enter ${checkName(key)}`} 
                                          value={data.productDetail[key]}
                                          onChange = {e => onChangeInput("productDetail", key, e.target.value)}/>;
      }
    }

    return (
    <Form>
      <fieldset >
       {Object.keys(data.listMenu).length > 0 && Object.keys(data.productDetail).map((key) => (
        
          (typeof data.productDetail[key] === "string" || typeof data.productDetail[key] === "number") ?  
            <Form.Group as={Row} key={key} className="d-flex">
              <Form.Label column sm={2} style={{fontSize:'1.6rem', backgroundColor:"aqua", fontWeight:'600'}}>
                  {checkName(key)}
                </Form.Label>
                  { renderInputWithKeyStringNumber(key, Row)} 
            </Form.Group> 
            : renderInputWithKeyArray(key, Row,)
    
        ))}

        <div className="btn btn-primary" 
             onClick={data.productDetail.productCode !== "* Waiting make product *" ? 
                      () => props.onUpdateProDuct(data.productDetail)
                      : () => props.onUpdateNewProDuct(data.productDetail)}
             style={{fontSize:'1.4rem', padding:'8px'}}
             >{
              data.productDetail.productCode !== "* Waiting make product *" ? "Update Product" : "Create New Product"
             }</div>
        <div className="btn btn-danger ml-3" 
             onClick={() => onConfirmHide()}
             style={{fontSize:'1.4rem', padding:'8px', width:'120px'}}
             >Close</div>
      </fieldset>
    </Form>)
}

export default ProductShowDetail;
