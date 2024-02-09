import React from "react";
import OrderList from "./OrderList";
import Card from "./UI/Card";


  return(
    <React.Fragment>
      <div className="table-1">
        <h3>Product Details </h3>
        <ul>
          {props.details.map((product) =>(
              <Card key={product.orderId}>
                <OrderList productDetails={product}></OrderList>
              </Card>
          ))}
        </ul>
      </div>
      <div className='cost-total'>
        <h3>{`Total cost of Products : ${props.productAmount}`}</h3>
      </div>
    </React.Fragment>
  );
};

export default OrderDeatils;
