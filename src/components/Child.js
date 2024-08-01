import React from 'react'
import '../styles/Child.css'

const Child = ({setisLogged}) => {
    const change = (e)=>{
        e.preventDefault();
        setisLogged(true);
    }
  return (
    <form onSubmit={change}>
        <label for="username">Username</label>
        <input type='text' id="username"/>
        <label for="password">Password</label>
        <input type='password' id="password"/>
        <button type='submit'>logIn</button>
    </form>
  )
}

export default Child