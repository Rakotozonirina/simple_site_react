import React from 'react'
import '../index.css'
import image from '../images/logo192.png'
export default function Nav(){
    return(
        <nav>
            <div className='content-logo_title'>
                <img src={image} className="logo" alt="The logo"/>
                <h2>ReactFacts</h2>
            </div>
            <div className='content-title'>
                <h3>React Course - Project 1</h3>
            </div>
        </nav>
    )
}