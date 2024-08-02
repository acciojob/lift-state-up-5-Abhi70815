import React ,{useState} from 'react';
import Child from './Child.js';

const Parent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
     <div>
        <h1>Parent Component</h1>
        { isLoggedIn ? <p>You are Logged in!</p> : <Child setIsLoggedIn={setIsLoggedIn}/>}
     </div>
    )
}
export default Parent