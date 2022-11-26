import React from "react"
import '../index.css'
import ContentPhoto from "./content_photo"
import Heading from "./content_heading"
import Button from "./button"
import Concern from "./concern"
import Icons from "./content_icons"
export default function Main() {
    return(
            <main>
                <ContentPhoto></ContentPhoto>
                <Heading></Heading>
                <Button></Button>
                <Concern></Concern>
                <Icons></Icons>
            </main>
    )
}