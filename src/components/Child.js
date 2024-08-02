import React from 'react'
// import '../styles/Child.css'

const Child = ({setisLogged}) => {
    const change = (e)=>{
        e.preventDefault();
        setisLogged(true);
    }
  return (
    <form onSubmit={change}>
        <label htmlFor="username">Username</label>
        <input type='text' id="username"/>
        <label htmlFor="password">Password</label>
        <input type='password' id="password"/>
        <button type='submit'>logIn</button>
    </form>
  )
}

export default Child