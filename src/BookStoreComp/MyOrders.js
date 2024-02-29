import React from 'react'
import MyOrderBook from './MyOrderBook'
import { useSelector } from 'react-redux'
import NoOrders from '../NoOrders';
export default function MyOrders() {
  const data = useSelector((state) => {
    return { numOfItems: state.cart.numOfItems, price: state.cart.price ,selectedBook:state.cart.id,orders:state.cart.orders};
  });
  console.log(data.orders)
  return (

    data.orders.length==0? <NoOrders/>:
    <div>
      {
        data.orders.map((item,index)=>{
          return <MyOrderBook index={item} key={index}/>
        })
      }
    </div>
  )
}
