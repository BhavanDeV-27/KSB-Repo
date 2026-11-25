import React from 'react'
import './Products.css';
import Main1 from './Main1';
import {Button} from '@mui/material'

function Products({properties,changeFunction}) {
  return (
    <div>
        <div id='product_main'>

            <div id='product_Des'>
                <h1>{properties.name}</h1>
            </div>

            <div id='product_image'>
                <img src={properties.source} 
                alt="" id='cart_img' />
            </div>
            <div id='product_Select'>
                {/* <button onClick={()=>changeFunction(properties)
                } >Add to Cart</button> */}
                <Button variant="contained" onClick={()=>changeFunction(properties)} id='Buttton_UI'>Order Now</Button>


            </div>

        </div>
    </div>
  )
}

export default Products