import React from 'react';
import Books from './mydb';
import Book from './Book';
import "./mainPageBody.css"
export default function MainPageBody() {
	return (
		<div className='mainPageBody'>
			{Books.map((item, index) => {
				return (
					<Book
						src={item.url }
						title={item.title}
						price={item.price}
						index={index}
						key={index}
					/>
				);
			})}
		</div>
	);
}
