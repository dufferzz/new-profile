import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import workshop from '../../assets/images/000.webp'
import tools from '../../assets/images/keys-workshop-mechanic-tools-162553.webp'
import server from '../../assets/images/server.webp'
import carb from '../../assets/images/carb.webp'
import 'animate.css/animate.min.css'

import Card from '../../components/card/card'

export default function HomePage() {
    return (
        <>
            <Card
                heading="Welcome To My Portfolio"
                background={workshop}
                subheading="My Name is Sam Duff - I am a British mechanic and software developer, aged 28"
                subsubheading="I have been a mechanic for 11 years, and a hobbiest software developer for well over 2."
                subsubsubheading="I have experience ranging from Software development in C++ and Web Dev - 
      to designing programmable racing CDI units for high performance motorcycles"
            />

            <Card
                heading="Full Stack Developer. Fluent in JS/TS, HTML5, SCSS"
                background={server}
                subheading=" Experienced in React, Angular, NodeJS"
                subsubheading="I have been a mechanic for 11 years, and a
                hobbiest software developer for well over 2."
                subsubsubheading="
                This site, and my other projects are hosted in GKE Kubernetes,
                upon a cluster of 3 nodes controlled by Argo CD."
            >
                <Link to="/projects">
                    <button className="buttons">View My Projects</button>
                </Link>
            </Card>

            <Card
                heading="Fast Turnaround, Small Engine Mechanic"
                background={tools}
                subheading="Performing rapid turnaround servicing and repairs on
                small engined machinery (Lawnmowers, Motorcycles,
                Etc) since 2008"
                subsubheading="Large stock of parts to ensure work assignments are
                returned ASAP."
                subsubsubheading="I currently designing high performance cylinder
                heads for the Yamaha DT125R.. Watch this space ;)"
            >
                <Link to="/contact">
                    <button className="buttons">Contact Me</button>
                </Link>
            </Card>

            <Card
                heading="View My Galleries!"
                background={carb}
                subheading="Fully loaded with pictures of my experiences, coding
                environments, and various life things"
            >
                <a href="https://photos.app.goo.gl/ELRAQaQH7jbFTncG6">
                    <button className="buttons">Work 2014-2020</button>
                </a>
                <a href="https://photos.app.goo.gl/s5UdBm6BE8pyVoSm9">
                    <button className="buttons">Development Pics</button>
                </a>
            </Card>
        </>
    )
}
