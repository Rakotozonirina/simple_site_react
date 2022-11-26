import React from "react"
import '../index.css'
import ContentPhoto from "./content_photo"
import Heading from "./content_heading"
import Button from "./button"
export default function Main() {
    return(
        <div>
            <main>
                <ContentPhoto></ContentPhoto>
                <Heading></Heading>
                <Button></Button>
            </main>
        </div>
    )
}