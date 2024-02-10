import OrderForm from "./Components/OrderForm";
import OrderDetails from "./Components/OrderDetails";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [gettingOrderDetails, setGettingOrderDetails] = useState([]);
  const [amount, setAmount] = useState(0);

  const onGettingOrderDetails = (props) => {
    setAmount((prevAmount) => {
      return Number(prevAmount) + Number(props.productPrice);
    });

    setGettingOrderDetails((prevOrders) => {
      return [...prevOrders, props];
    });
    localStorage.setItem(
      `${props.orderId}`,
      `"Product Name" : '${props.productName}' ,  "Product Selling Price" :  '${props.productPrice}'`
    );
  };

  const deleteButtonClicked = (props) => {
    console.log(props);

    const index = gettingOrderDetails.indexOf(props);
    console.log(index);
    setGettingOrderDetails((prevOrders) => {
      return prevOrders.filter((product) => product.orderId !== props.orderId);
    });
    setAmount((prevAmount) => {
      return Number(prevAmount) - Number(props.productPrice);
    });
  };

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h2>Shopping Site</h2>
        </header>
      </div>
      <div className="main-body">
        <OrderForm orderDetails={onGettingOrderDetails}></OrderForm>
      </div>
      <div>
        <OrderDetails
          deleteDetails={deleteButtonClicked}
          details={gettingOrderDetails}
          productAmount={amount}
        ></OrderDetails>
      </div>
    </React.Fragment>
  );
}
export default App;
