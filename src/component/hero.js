import React from 'react'
import Image from '../image/hero.png'

export default function Hero() {
    return(
        <section className='hero'>
            <img src={Image} alt='hero' loading="eager" decoding="sync"/>
        </section>
    )
}