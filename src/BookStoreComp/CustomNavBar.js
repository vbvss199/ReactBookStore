import './CustomNavBar.css';
import React from 'react';
import { BrowserRouter as BR, Route, Routes, useParams } from 'react-router-dom';
import Home from './Home';
import MyOrders from './MyOrders';
import Cart from './Cart';
import { Outlet } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import BookDetails from './BookDetails';
export default function CustomNavBar() {
	return (
		<div>
			<BR>
				<nav className="primary-nav">
					<h2 id="navbar-heading">eCommerce-cart</h2>
					<NavLink id="navlink" to="/home">Home</NavLink>
					<NavLink id="navlink" to="/myorders">myorders</NavLink>
					<NavLink id="navlink" to="/cart">cart</NavLink>
				</nav>
				<Routes>
					<Route path="/home" element={<Home />}></Route>
                    <Route path="/home/:id" element={<BookDetails />}></Route>
					<Route path="/myorders" element={<MyOrders />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
				</Routes>
			</BR>
		</div>
	);
}
