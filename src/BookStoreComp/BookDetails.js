import React from "react";
import Books from "./mydb";
import { useParams } from "react-router-dom";
import Book from "./Book";
import { Link } from "react-router-dom";
import "./BookDetails.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice.ts";
export default function BookDetails(props) {
  const params = useParams();
  const bookId = params.id;
  let index = 0;
  for (let i = 0; i < Books.length; i++) {
    if (Books[i].id == bookId) {
      index = i;
      break;
    }
  }
  const dispatch = useDispatch();
  function adding() {
    alert(`book Added ${bookId}`);
    return dispatch(
      addToCart({ price: Books[index].price, bookNumber: bookId })
    );
  }
  function buyBook() {
    return dispatch(
      addToCart({ price: Books[index].price, bookNumber: bookId })
    );
  }
  
  return (
    <div className="main">
      <div className="detailsPage">
        <div className="image-wrapper">
          <img src={Books[index].url} alt="Selected Book" />
        </div>
        <div className="details-wrapper">
          <h3>Title : {Books[index].title}</h3>
          <h6>Price : {Books[index].price}</h6>
          <h6>Author : {Books[index].author}</h6>
          <h6>SBDN : 10</h6>
          <h6>PageCount : 200</h6>
          <div className="buttons-wrapper">
            <button id="addToCartBtn" onClick={adding}>ADD TO CART</button>
            <Link to={`/cart`}>
              <button id="" onClick={buyBook}>BUY NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="description">
        <h5>
        {Books[index].description}
        </h5>
      </div>
    </div>
  );
}
