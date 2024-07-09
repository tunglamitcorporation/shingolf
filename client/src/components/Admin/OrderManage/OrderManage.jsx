import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import OrderManageItems from "./OrderManageItems";
import * as orderApi from "../../../api/order";

function OderManage() {
    const [dataRender, setDataRender] = useState({
        listMenu: {},
        data: [],
        oderDetail: {}
    });
    const [show, setShow] = useState(false);

    const handleClose = () => { setShow(false)};
    const handleShow = () => { setShow(true); };

    return (
        <div className="mt-5 product">

            <Modal show={show} onHide={handleClose} animation={false} size="xl">
                <Modal.Header closeButton>
                <Modal.Title>Order Item Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        // Object.keys(dataRender.listMenu).length > 0 
                        // &&  <ProductShowDetail listMenu={dataRender.listMenu}
                        //                        productDetail={dataRender.productDetail}
                        //                        onUpdateNewProDuct={updateNewProduct}
                        //                        onUpdateProDuct={updateProduct}
                        //                        onHide={handleClose}
                        //                        onDeleteProduct={onDeleteProduct}
                        //     />
                    }
                </Modal.Body>
                <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add Product
                </Button> */}
                </Modal.Footer>
            </Modal>

            <h1 className="product-title">Oder Manage</h1>

            {
            dataRender.data.length > 0 && <OrderManageItems
                                            type = "product"
                                            data = {dataRender.data}
                                            listMenu={dataRender.listMenu}
                                            supportFunction1={()=> {}}
                                            onOpenEditProduct={onOpenEditProduct}
                                        />
            }
        </div>
    )
}

export default OderManage;