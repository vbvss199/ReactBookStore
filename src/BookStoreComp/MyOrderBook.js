import React from 'react'
import Books from "./mydb"
import "./MyOrderBook.css"
export default function MyOrderBook(props) {
  return (
    <div className='MyOrderBook'>
        <div className="infoAboutDelivery">
            <p id="date">Date : {new Date().toLocaleDateString()}</p>
            <p id="deliveryStatus">Status : Ordered</p>
        </div>
        <div className="dataAboutBooks">
            <div className="imageHolder">
                <img  id="image1" src={`${Books[props.index-1].url}`}  />
            </div>
            <div className="bookdetails">
                <h6>Title : {Books[props.index-1].title}</h6>
                <p>Author : {Books[props.index-1].author}</p>
                <p>Price :  {Books[props.index-1].price}</p>
            </div>
        </div>
    </div>
  )
}
