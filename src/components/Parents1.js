import React ,{useState} from 'react';
import Child from './Child.js';
import '../styles/Parent.css';
const Parents1 = () => {
    const [isLoggedIn,setisLoggedIn]=useState(false);
    return (
     <div>
  { isLoggedIn ? <h1>You are Logged in!</h1> : <Child setisLogged={setisLoggedIn}/>}

     </div>
    )
}

export default Parents1