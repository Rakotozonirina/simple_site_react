import React from "react"
import '../index.css'
import ContentPhoto from "./content_photo"
import Heading from "./content_heading"
export default function Main() {
    return(
        <div>
            <main>
                <ContentPhoto></ContentPhoto>
                <Heading></Heading>
            </main>
        </div>
    )
}