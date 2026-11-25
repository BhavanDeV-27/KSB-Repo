import React from 'react'
import './Contact.css';

function Contact({setName,setEmail}) {
  const addName=(event)=>{
event.preventDefault();
let name = event.target.uname.value;
let email = event.target.uemail.value;
setName(name);
setEmail(email);


  }
  return (
    <div>
      <h1 id='UserLogin'>User Login Form</h1>
       <div id='User_Form'>
        <form onSubmit={addName}>
          <table>
            <tr>
              <td><h3>Enter the Name </h3></td>
            <td><input type="text" name='uname' placeholder='Enter your Name here' /></td>
            </tr>
            <tr>
              <td><h3>Enter the Number </h3></td>
              <td><input type="Number" name='unumber' placeholder='Enter your Number here' /></td>
            </tr>
            <td><h3>Enter Email ID </h3></td>
              <td><input type="Email" name='uemail' placeholder='Enter your Email here' /></td>
              <tr>
                <td>
                  <input type="submit" name='' id='Form_Button'/>
                </td>
              </tr>
         </table>   
        </form>

       </div>
    </div>

  )
}

export default Contact