import React from 'react'
import './Main1.css';
import Navigation from './Navigation';
import Products from './Products';

function Main1({setCardItems}) {
  const Product1 = {name:"Black Hoodie",
    source:"https://static.vecteezy.com/system/resources/previews/029/883/644/non_2x/black-hoodie-mockup-with-wooden-background-ai-generate-free-photo.jpg"};
    
    const Product2 = {name:"Shirt",
      source:"https://tse2.mm.bing.net/th/id/OIP.VCpZ4u6MS_qYenXXF3tREgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"};

  const addtoCart=(value)=>{
    setCardItems((previousData)=>[...previousData,value])

  }

  return (
    <div>
        <div id='Main_container'>
            <div id='Products'>
            <Navigation/>
            <Products properties={Product1} changeFunction={addtoCart}/>
            <br /><br />
            <Products properties={Product2} changeFunction={addtoCart}/>
            </div>
            <div id='Main-image'>
                <img src="https://static.vecteezy.com/system/resources/previews/008/472/914/non_2x/beautiful-young-asian-woman-with-shopping-bags-file-png.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Main1