import Books from "./mydb";

import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Book.css"
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice.ts';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
export default function Book(props) {
  const dispatch = useDispatch();
  function buyBook() {
    alert("book Added To cart")
    return dispatch(
      addToCart({ price: Books[index].price, bookNumber: props.index+1 })
    );
  }



  const index=props.index;
  return (
    <div className='book'>
        <Link to={`/home/${props.index+1}`}><img id='image1' src={props.src} alt="Book "  /></Link>
        <h6>Title : {props.title}</h6>
        <h6>Price : {props.price}</h6>
        {/* <Link to={`/home/${props.index+1}`}><button className='showDetailsButton'>Details</button></Link> */}
        <button className="buyNowbtn"  onClick={buyBook}>BUY NOW</button>
    </div>
  )
}
