import React, { useState } from "react";
import Card from './UI/Card';
import './OrderForm.css';

const OrderForm = (props) => {
  const [orderId, setOrderId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const productDetails = {
      orderId: orderId,
      productName: productName,
      productPrice: productPrice,
    };
    props.orderDetails(productDetails);
    setOrderId("");
    setProductName("");
    setProductPrice("");
  };

  const orderIdHandler = (event) => {
    setOrderId(event.target.value);
  };
  const productNameHandler = (event) => {
    setProductName(event.target.value);
  };

  const productPriceHandler = (event) => {
    setProductPrice(event.target.value);
  };

  return (
    <React.Fragment>
      <Card className="form-body">
        <form onSubmit={onSubmitHandler}>
          <div className="product-labels">
            <label htmlFor="orderId" id='orderIdLabel'>Unique Order ID</label>
            <label  htmlFor="product" id='productLabel'>Product Name</label>
            <label  htmlFor="productPrice" id='productPriceLabel'>Product Price</label>
          </div>
          <div className="input-field1">
            <input
              type="number"
              id="orderId"
              value={orderId}
              onChange={orderIdHandler}
            ></input>
            <input
              type="text"
              id="product"
              value={productName}
              onChange={productNameHandler}
            ></input>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={productPriceHandler}
            ></input>
          </div>

      <button type="submit">Add to Bill</button>
          
        </form>
      </Card>
    </React.Fragment>
  );
};

export default OrderForm;
