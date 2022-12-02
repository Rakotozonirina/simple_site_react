import React from 'react'
import '../src/index.css'
import Nav from './component/nav'
import Hero from './component/hero'
import Card from './component/card'
import images from './component/image'
export default function App() {
    return(
        <>
            <Nav/>
            <Hero/>
            <div className='content--card'>
                <Card
                    img={images.swimming}
                />
                <Card
                    img={images.nature}
                />
                <Card
                    img={images.tree}
                />
                <Card
                    img={images.foggy}
                />
                <Card 
                    img={images.landscape}
                />
            </div>
        </>
    )
}