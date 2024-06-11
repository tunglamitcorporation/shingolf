import React, { useEffect, useState } from "react";
import * as productAPi from '../../api/product'
import ProductManageItems from "./ProductManageItems.jsx";
import './adminComponets.css'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import ProductShowDetail from "./ProductShowDetail.jsx";


function ProducManage() {
    const [dataRender, setDataRender] = useState([]);
    const [typeView, setTypeView] = useState("All");
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    
    console.log("datarender", dataRender)
    useEffect(()=>{
        // call API take all product and make table
        const takeData = async () => {
            const data = await productAPi.takeAll()
            console.log(data)
            setDataRender(data.data.data)
        }

        takeData();
    },[])



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    function renderItem() {
        let result = [];

        if(dataRender.length > 0) {

        }
        return result;
    }
    return(
        <div className="mt-5 product">

             <Modal show={show} onHide={handleClose} animation={false} size="xl">
                <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProductShowDetail />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add Product
                </Button>
                </Modal.Footer>
            </Modal>

            <h1 className="product-title">Product Manage</h1>
            <Button variant="primary mt-2 mb-2 p-2" onClick={handleShow}>
                  Add New Product
            </Button>
            {/* <img src="https://cdn.24h.com.vn/upload/1-2021/images/2021-03-18/gia-nhap-duong-dua-bikini-tieu-thu-ha-noi-chiem-tron-song-bb9-5639403-1616037657-573-width800height999.jpg" alt="pic" /> */}

            {
            dataRender.length > 0 && <ProductManageItems
                                            type = "product"
                                            data = {dataRender}
                                            supportFunction1={()=> {}}
                                        />
        }

        </div>

    )
}

export default ProducManage;
