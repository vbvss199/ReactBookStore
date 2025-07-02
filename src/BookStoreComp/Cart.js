import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";
import { Link } from "react-router-dom";
import { placeOrder } from "./CartSlice.ts";
import Books from "./mydb";
import { useDispatch } from "react-redux";
import { removeItemsFromCart } from "./CartSlice.ts";
export default function Cart() {
  const dispatch=useDispatch();
  const data = useSelector((state) => {
    return {
      numOfItems: state.cart.numOfItems,
      price: state.cart.price,
      selectedBook: state.cart.id,
      orders: state.cart.orders,
    };
  });
  function removeBooks() {
    let confirmation=window.confirm("Do you want to delete all Items In Cart");
    if(confirmation){
      return dispatch(
        removeItemsFromCart({})
    );
    }
    else{
      alert("Books Not Deleted")
    }
    
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };
  return (
    <div className="cart">
      <div className="address">
        <form name="addressForm" onSubmit={()=>onSubmit()}>
          <div className="label">
            <h6>Name </h6>
            <input type="text" placeholder="Enter Your Name" required />
          </div>
          <div className="label">
            <h6>State </h6>
            <input type="text" placeholder="State" required />
          </div>
          <div className="label">
            <h6>City </h6>
            <input type="text" placeholder="City" required />
          </div>

          <div className="label">
            <h6>Pin  </h6>
            <input type="text" placeholder="pincode" required />
          </div>
          <div className="label">
            <button
              id="savebtn"
              onClick={() => {
                onSubmit();
              }}
            >
              {" "}
              SaveAddress{" "}
            </button>
            <button id="editbtn">EditAddress</button>
          </div>
        </form>
      </div>
      <div className="shoppingBag">
        <h6>Selected Books :</h6>
        {data.selectedBook.map((item, index) => {
          return <p key={index}>{Books[item-1].title} Is added to Cart , and cost is {Books[item-1].price}</p>;
        })}
      </div>
      <div className="emptyDiv"></div>
      <div className="paymentInfo">
        <h6>Payment Information :</h6>
        <p>Items Price :{data.price}</p>
        <p>Tax : {Number(data.price * 0.18)}</p>
        <p>Shipping Charges :{data.price==0?0 :data.price > 200 ? 0 : 100}</p>
        <p>
          total Price :
          {(data.price > 200 ? 0 : 100) +
            data.price +
            Number(data.price * 0.18)}
        </p>
        <div className="paymentBtns">
          <Link to="/myorders">
            <button
              onClick={() => {
                dispatch(placeOrder());
                alert("Order placed Successfully");
              }}
              id="checkoutbtn"
            >
              CheckOut
            </button>
          </Link>
          <button onClick={()=>removeBooks()} id="cancelbtn">Cancel</button>
        </div>
      </div>
    </div>
  );
}
