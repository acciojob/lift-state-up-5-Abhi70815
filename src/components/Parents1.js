import React ,{useState} from 'react';
import Child from './Child.js';
import '../styles/Parent.css';
const Parents1 = () => {
    const [isLoggedIn,setisLoggedIn]=useState(false);
    return (
     <div>
  { isLoggedIn ? <p>You are Logged in!</p> : <Child setisLogged={setisLoggedIn}/>}

     </div>
    )
}

export default Parents1