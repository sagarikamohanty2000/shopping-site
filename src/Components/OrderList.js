
import React from 'react';

const OrderList = (props) => {

    const deleteHandler = (products) => {
       
        console.log(products);
        props.onDelete(products);
    }
    
 
    return(
        <li>
            {props.productDetails.orderId}    {props.productDetails.productName}  {props.productDetails.productPrice}   {props.productDetails.tableNo}  <button type='button' onClick={() => deleteHandler(props.productDetails)}> Delete</button>
        </li>
    )
}

export default OrderList;