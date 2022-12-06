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
                key={item.id}
                item={item}
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