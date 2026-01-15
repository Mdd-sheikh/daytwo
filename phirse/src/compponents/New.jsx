import React from 'react'
import logo from '../assets/react.svg'
import './New.css'

const New = () => {
  return (
    <>
    <div className="navbar">
        <div className="left">
            <img src={logo} alt="logo of react" />
        </div>
        <div className="right">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Skill</li>
                <li>About</li>
            </ul>
        </div>
    </div>
     <div className='helle'>
        <h1>this is day 2 to learn github</h1>
        <p>this is working</p>
    </div>
    </>
  )
}

export default New