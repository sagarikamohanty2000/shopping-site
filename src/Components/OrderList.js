import React from "react";
import "./OrderList.css";

const OrderList = (props) => {
  const deleteHandler = (products) => {
    console.log(products);
    props.onDelete(products);
  };

  return (
    <li>
      <div className="product-list">
        <div className="orderId">{`Product Id : ${props.productDetails.orderId}`}</div>
        <div className="prodName">{props.productDetails.productName}</div>
        <div className="prodPrice">{`Rs.${props.productDetails.productPrice}`}</div>
        <div className="DeleteBtn">
          <button
            type="button"
            id="deleteBtn"
            onClick={() => deleteHandler(props.productDetails)}
          >
            {" "}
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default OrderList;
