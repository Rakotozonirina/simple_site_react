import React from 'react'
import '../src/index.css'
import Nav from './component/nav'
import Hero from './component/hero'
import Card from './component/card'
export default function App() {
    return(
        <>
            <Nav/>
            <Hero/>
            <div className='content--card'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}