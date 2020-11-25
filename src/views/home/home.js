import React from 'react'
import workshop from '../../assets/images/000.webp'
import tools from '../../assets/images/keys-workshop-mechanic-tools-162553.webp'

import server from '../../assets/images/server.webp'
import carb from '../../assets/images/carb.webp'

import Card from '../../components/card/card'
import ScrollAnimation from 'react-animate-on-scroll'

import '../../components/card/card.css'
export default function HomePage() {
    return (
        <>
            <ScrollAnimation animateIn="fadeIn">
                <Card
                    heading="Welcome To My Portfolio"
                    background={workshop}
                    subheading="My Name is Sam Duff - I am a British mechanic and software developer, aged 28"
                    subsubheading="I have been a mechanic for 11 years, and a hobbiest software developer for well over 2."
                    subsubsubheading="I have experience ranging from Software development in C++ and Web Dev - 
      to designing programmable racing CDI units for high performance motorcycles"
                />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
                <div
                    className="image-box shadow somepadding"
                    style={{ backgroundImage: `url(${server})` }}
                >
                    <div className="inner">
                        <h1 className="shadow somepadding">
                            Full Stack Developer. Fluent in JS/TS, HTML5, SCSS
                        </h1>
                        <h3 className="shadow somepadding">
                            Experienced in React, Angular, NodeJS
                        </h3>
                        <h3 className="shadow somepadding">
                            This site, and my other projects are hosted in GKE
                            Kubernetes, upon a cluster of 3 nodes controlled by
                            Argo CD.
                        </h3>
                        <h3 className="shadow somepadding">
                            Builds are controlled by a locally hosted Jenkins CI
                            pipeline
                        </h3>
                        <h3>Daily Linux user since Kernel 2.6.4</h3>
                        <a href="/projects">
                            <button className="buttons">
                                View My Projects
                            </button>
                        </a>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
                <div
                    className="image-box shadow somepadding"
                    style={{ backgroundImage: `url(${tools})` }}
                >
                    <div className="inner">
                        <h1 className="shadow somepadding">
                            Fast Turnaround, Small Engine Mechanic
                        </h1>
                        <h3>
                            Performing rapid turnaround servicing and repairs on
                            small engined machinery (Lawnmowers, Motorcycles,
                            Etc) since 2008
                        </h3>
                        <h3 className="shadow somepadding"></h3>
                        <h3>
                            Large stock of parts to ensure work assignments are
                            returned ASAP.
                        </h3>
                        <h3 className="somepadding"></h3>
                        <h3>
                            I currently designing high performance cylinder
                            heads for the Yamaha DT125R.. Watch this space ;)
                        </h3>
                        <a href="/projects">
                            <button className="buttons">Contact Me</button>
                        </a>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <div
                    className="image-box shadow somepadding"
                    style={{ backgroundImage: `url(${carb})` }}
                >
                    <div className="inner">
                        <h1 className="shadow somepadding">
                            View My Galleries!
                        </h1>
                        <h3 className="shadow somepadding">
                            Fully loaded with pictures of my experiences, coding
                            environments, and various life things
                        </h3>
                        <a href="https://photos.app.goo.gl/ELRAQaQH7jbFTncG6">
                            <button className="buttons">Work 2014-2020</button>
                        </a>
                        <a href="https://photos.app.goo.gl/s5UdBm6BE8pyVoSm9">
                            <button className="buttons">
                                Development Pics
                            </button>
                        </a>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    )
}
