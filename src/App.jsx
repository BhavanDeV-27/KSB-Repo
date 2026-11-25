import './App.css';
import Main1 from './Components/Main1';
import { Link, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {
  const [cartItems,SetCartItems]=useState([]);
  const [username,setUserName]=useState("Guest");
  const [userEmail,setUserEmail]=useState("");

  return (
    <div className="App">
      <header>
        <div id='User_Profile'>
          <table>
            <tr>
              <td><img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt=""  id='User_image'/></td>
              <td><h3 className='Profile_Name'>{username}</h3></td>
              <td><p className='Profile_Mail'>{userEmail}</p></td>
            </tr>
          </table>
        </div>
        <div id='Nav_Files'>
            <table>
                <tr>
                    <td><b><Link to="/" className='Nav_Link'>Home</Link></b></td>
                    <td><b><Link to="/About" className='Nav_Link'>About</Link></b></td>
                    <td><b><Link to="/Contact" className='Nav_Link'>Login</Link></b></td>
                    <td><b><Link to="/Cart" className='Nav_Link'>Cart</Link></b></td>
                </tr>
            </table>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Main1 setCardItems={SetCartItems}/>}></Route>
        {/* <Route path='/Home' element={<Main1/>}></Route> */}
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact setName={setUserName} setEmail={setUserEmail}/>}></Route>
        <Route path='/Cart' element={<Cart myCart={cartItems}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
