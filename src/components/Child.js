import React from 'react'

const Child = ({setIsLoggedIn}) => {
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input type='text' id="username"/>
            <label htmlFor="password">Password</label>
            <input type='password' id="password"/>
            <button type='submit'>logIn</button>
        </form>
    )
}
export default Child