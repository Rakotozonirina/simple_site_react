import React from 'react'
import '../src/index.css'
import Nav from './component/nav'
import Hero from './component/hero'
import Card from './component/card'
import data from './data'
console.log(data)
export default function App() {
    const cards = data.map(item => {
        return(
            <Card
                img={item.coverImg}
                title={item.title}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                price={item.price}
                openSpots={item.openSpots}
                />
        )
    })
    return(
        <>
            <Nav/>
            <Hero/>
            <div className='content--card'>
                {cards}
            </div>
        </>
    )
}