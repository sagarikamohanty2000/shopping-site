import React from "react";
import OrderList from "./OrderList";
import Card from "./UI/Card";
import "./OrderDetails.css";

const OrderDeatils = (props) => {
  const deleteHandler = (value) => {
    console.log(value);
    props.deleteDetails(value);
  };

  return (
    <React.Fragment>
      <div className="products">
        <div className="Headers">
          <h3>Product Details </h3>

          <div className="cost-total">
            <h3>{`Total cost of Products : ${props.productAmount}`}</h3>
          </div>
        </div>

        <ul>
          {props.details.map((product) => (
            <Card className="details" key={product.orderId}>
              <OrderList
                productDetails={product}
                onDelete={deleteHandler}
              ></OrderList>
            </Card>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default OrderDeatils;
