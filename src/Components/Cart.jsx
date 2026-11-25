import React from 'react'
import './Cart.css';

function Cart({myCart}) {
  return (
    <>
      <div id='Cart_Main' >

        <div id='Cart_Main1'>
        <h1>This is my Cart</h1>
      </div>
      
      <div id='Cart_Main2'>
        {myCart.length === 0? (<div><h1>Your Cart is EMPTY</h1></div>):
        (<div>{myCart.map((items)=>(
           <div>
           <h1>Product: {items.name}</h1>
           <img src={items.source}/>
         </div>
        ))}</div>)
        }
      </div>
      <div id='Cart_Main3'>
        <img src="https://th.bing.com/th/id/OIP.D2oDmRcuaBiHzM3TEMto5AHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" id="Cart_Image"
        alt="" />
      </div>
      </div>
      </>
  )
}

export default Cart