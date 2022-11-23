import React from 'react'
import Image from '../image/my picture.jpg'
import '../index.css'

export default function ContentPhoto(){
    return(
        <img src={Image} alt='My profile'/>
    )
}