import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form, Container, Row, Col } from 'react-bootstrap';
import './adminComponets.css'
function ProductShowDetail(props) {
    // const {listMenu} = props;
    const LIST_SELECT_PRODUCT_ID =  ['golfsticknew', 'golfstickold', 'golfstickhangle', 'golfclothesmen', 'golfclotheswwomen', 'golfacessory', 'golfbag', 'golfshoes', 'golfpractice'];
    const [data, setData] =useState({
      productDetail: {
        "productId": "",
        "category": "",
        "productType": "",
        "productname": "",
        // "productImage": [],
        "status": "",
        "amount": 0,
        "price": 0,
        "saleprice": 0,
        "rate": 0,
        "loft": "",
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
        "shoestype": "",
        "sex": "",
        "brand": "",
        "producelocation": "",
        "guarantee": "",
        "color": "",
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
            newData.productDetail.category = Object.keys(props.listMenu)[0];
            newData.productDetail.productId = LIST_SELECT_PRODUCT_ID[0];
            newData.productDetail.productType = props.listMenu[""+Object.keys(props.listMenu)[0]][0];
            

            setData(newData);
          }
        }
      },[])

      function onChangeInput(area, target, value, option) {
        console.log("vo here on change input")
        const newData = {...data};
        if(option) {
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
          case "productname": return "Product Name";
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
      console.log("start up Picture")
      const formData = new FormData();
      formData.append('image', file);
      //formData.append('image_data', file);
      // image_data
  
      try {
       console.log("start up Picture 2")
        const response = await fetch(`/upload${link}/${name}`, { //+dataState._id
          method: 'POST',
          body: formData,
          // headers: { Authorization: "", },
          headers: { Link: link, Name: name },
        });
  
        console.log("response", response);
  
      //   if (response.ok) {
      //     const data = await response.json();
      //     //console.log('URL ảnh đã tải lên:', data.imageUrl);
          
      //     const responseUpPassport = await uploadPassPort(dataState._id, { link:data.imageUrl }, token);
  
      //     //console.log("responseUpPassport", responseUpPassport);
  
      //     if(responseUpPassport) {
      //         if(responseUpPassport.data.status === 1) informationToast(responseUpPassport.data.msg);
      //         else errorToast(responseUpPassport.data.msg);
      //     }
      //     // update to server
      //     setDataState({
      //         ...dataState,
      //         passport: data.imageUrl
      //     })
      //   } else {
      //     errorToast("Error when upload Passport, Please check the photo size < 1Mb")
      //     //console.error('Lỗi tải lên ảnh.');
      //   }
      } catch (error) {
        console.error('Lỗi kết nối máy chủ:', error);
      }
  };

      function renderContent(dataRender) {
        let result = [];

        Object.keys(dataRender).forEach((item, index) => {
          result.push( <Form.Group as={Row} key={item} className="d-flex">
            <Form.Label column sm={2} style={{fontSize:'1.4rem'}}>
                {checkName(item)}
              </Form.Label>
             <Form.Control type={"text"}
                          style={{width:'70%'}} 
                          placeholder={`Enter item`} 
                          onChange = {e => onChangeInput("content", e.target.value, index)}/>
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

    //  console.log("listMenu[data.category]", listMenu[""+data.category])
    //  console.log("listMenu", listMenu)
    // console.log("data.category", data.category)

    return (
    <Form>
      <fieldset >
       {Object.keys(data.listMenu).length > 0 && Object.keys(data.productDetail).map((key) => (
        
          (typeof data.productDetail[key] === "string" || typeof data.productDetail[key] === "number") ?  <Form.Group as={Row} key={key} className="d-flex">
            <Form.Label column sm={2} style={{fontSize:'1.4rem'}}>
                {checkName(key)}
              </Form.Label>
              {/* <Col sm={10}> */}
                {
                  (key !== "category" && key !=="productType" && key !=="productId") ? <Form.Control type={typeof data.productDetail[key] === "number" ? "number": "text"}
                              style={{width:'70%'}} 
                              placeholder={`Enter ${checkName(key)}`} 
                              onChange = {e => onChangeInput("productDetail", key, e.target.value)}/>
                            : <><select name="cars" id="cars" style={{width:'60%'}} 
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
                } 
                
              {/* </Col> */}
            </Form.Group> : key === "content" ?  
              <Form.Group as={Row} key={key} className="d-flex">
                <Form.Label column sm={2} style={{fontSize:'1.4rem'}}>
                  {checkName(key)}
                </Form.Label>
                <div>
                  {renderContent(data.productDetail[key])}
                </div>
              </Form.Group>
                

            :<Form.Group as={Row} key={key} className="d-flex">
                <Form.Label column sm={2} style={{fontSize:'1.4rem'}}>
                    {checkName(key)}
                  </Form.Label>

                  <div className="product_show_detail-content d-flex">

                    <div style={{width:"20%"}} className="mr-2">
                        <img className="product_show_detail-content-item" src="https://toquoc.mediacdn.vn/2018/12/25/cau-vang-ba-na-3-15457134861131150541874.jpg"></img>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image","test1")}>Update Sale</button>
                    </div>

                    <div style={{width:"20%"}} className="mr-2">
                        <img className="product_show_detail-content-item" src="https://nemthuanviet.com/wp-content/uploads/2023/10/canh-dep-1.jpg"></img>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image","test2")}>Update Sale</button>
                    </div>

                    <div style={{width:"20%"}} className="mr-2">
                        <img className="product_show_detail-content-item" src="https://ik.imagekit.io/tvlk/blog/2023/07/canh-dep-thien-nhien-Viet-Nam-11-1024x576.jpg?tr=dpr-2,w-675"></img>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image","test3")}>Update Sale</button>
                      </div>
                
                    <div style={{width:"20%"}} className="mr-2">
                        <img className="product_show_detail-content-item" src="https://m.yodycdn.com/blog/phong-canh-dep-o-viet-nam-yody-vn-14.jpg"></img>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image","test4")}>Update Sale</button>
                    </div>

                    <div style={{width:"20%"}} className="mr-2">
                        <img className="product_show_detail-content-item" src="https://m.yodycdn.com/blog/phong-canh-dep-o-viet-nam-yody-vn-14.jpg"></img>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/product/image","test5")}>Update Sale</button>
                    </div>

                </div>
              </Form.Group>
    
        ))}

        {/* <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add Picture 1</Form.Label>
            <Form.Control type="file" />
        </Form.Group> */}

        <div className="btn btn-primary" onClick={() => props.onUpdateNewProDuct(data.productDetail)}>Add New Product</div>
      </fieldset>
    </Form>)
}

export default ProductShowDetail;