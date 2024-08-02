import React from 'react'

const Child = ({setIsLoggedIn}) => {
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return (
        <form onSubmit={handleLogin}>
           <p>
           <label htmlFor="username">Username:</label>
           <input type='text' id="username"/>
           </p>
            <p>
            <label htmlFor="password">Password:</label>
            <input type='password' id="password"/>
            </p>
            <button type='submit'>logIn</button>
        </form>
    )
}
export default Child