import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form, Container, Row, Col } from 'react-bootstrap';

function ProductShowDetail(props) {
    
    const [data, setData] =useState({
        "id": "golfsticknew/golfstickold/golfshirtmen/...",
        "productname": "tên",
        "productImage": [""],
        "status": "tình trạng",
        "amount": "số lượng",
        "price": "giá",
        "saleprice": "giá sale",
        "rate": "đánh giá",
        "loft": "độ loft",
        "sticktype": "loại gậy",
        "stickhardtype": "độ cứng",
        "feature": "đặc điểm",
        "long": "chiều dài",
        "weight": "trọng lượng",
        "stickcover": "bọc gậy",
        "accessory": "phụ kiện",
        "grip": "grip",
        "hand": "tay thuận",
        "rank": "rank",
        "produceyear": "năm sản xuất",
        "managenumber": "mã số qly",
        "size": "size",
        "shoestype": "loại giày",
        "sex": "giới tính",
        "brand": "nhãn hiệu",
        "producelocation": "nơi sản xuất",
        "guarantee": "bảo hành",
        "color": "màu",
        "material": "chất liệu",
        "content1": "",
        "content2": "",
        "content3": "",
        "content4": "",
        "image1": "",
        "image2": "",
        "image3": "",
        "image4": ""
      });


    return (
    <Form>
      <fieldset >
       {Object.keys(data).map((key) => (
          <Form.Group as={Row} key={key} className="d-flex">
            <Form.Label column sm={2}>
              {data[key]}
            </Form.Label>
            {/* <Col sm={10}> */}
              <Form.Control type="text" placeholder={`Enter ${data[key]}`} />
            {/* </Col> */}
          </Form.Group>
        ))}


        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add Picture 1</Form.Label>
            <Form.Control type="file" />
        </Form.Group>


        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>)
}

export default ProductShowDetail;