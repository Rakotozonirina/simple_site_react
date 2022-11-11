import React from 'react'
import '../index.css'
import image from '../images/logo192.png'
export default function Nav(){
    return(
        <nav>
            <img src={image} className="logo" alt="The logo"/>
        </nav>
    )
}