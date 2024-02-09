import OrderForm from "./Components/OrderForm";
import OrderDetails from "./Components/OrderDetails";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [gettingOrderDetails, setGettingOrderDetails] = useState([]);

  const onGettingOrderDetails = (props) => {
    setAmount((prevAmount) => {
      return Number(prevAmount) + Number(props.productPrice);
    });

    setGettingOrderDetails((prevOrders) => {
      return [...prevOrders, props];
    });
    localStorage.setItem(
      `${props.orderId}`,
      `${props.productName} ${props.productPrice}`
    );
  };

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h2>Restaurant Order</h2>
        </header>
      </div>
      <div className="main-body">
        <OrderForm orderDetails={onGettingOrderDetails}></OrderForm>
      </div>
      <div>
        <OrderDetails
          details={gettingOrderDetails}
          productAmount={amount}
        ></OrderDetails>
      </div>
    </React.Fragment>
  );
}
export default App;
