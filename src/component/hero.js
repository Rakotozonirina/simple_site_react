import React from 'react'
import image from '../image/hero.png'
export default function Hero() {
    return(
        <section className='hero'>
            <img src={image} alt='hero' loading="eager" decoding="sync"/>
            <div>
                <p>Online Experiences</p>
                <p>Join unique interactive activities led by <br></br> one of a kinds hosts all without leaving <br></br> home.</p>
            </div>
        </section>
    )
}