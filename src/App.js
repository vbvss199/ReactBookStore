import React from 'react'
import CustomNavBar from "./BookStoreComp/CustomNavBar"
import { BrowserRouter as BR, Route, Routes, useParams } from 'react-router-dom';
import Home from './BookStoreComp/Home';
import MyOrders from './BookStoreComp/MyOrders';
import Cart from './BookStoreComp/Cart';
// import HomeContainer from './reduxContainers/HomeContainer';
export default function App() {

  return (
    <div>
      <CustomNavBar/>
    </div>
  )
}
