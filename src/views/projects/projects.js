import React from 'react'
import '../../components/card/card.css'

import dfzstore from '../../assets/images/concrete.webp'
import carb from '../../assets/images/carb.webp'
import code from '../../assets/images/code.webp'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Projects() {
    return (
        <div>
            <ScrollAnimation animateIn="fadeIn">
                <div
                    className="image-box shadow somepadding"
                    style={{ backgroundImage: `url(${carb})` }}
                >
                    <div className="inner">
                        <h1 className="shadow somepadding">
                            Check Out My Github Repos!
                        </h1>
                        <h3 className="shadow somepadding">
                            I have made a selection of my repositories public,
                            so people may explore as they wish.
                        </h3>

                        <h3 className="shadow somepadding">
                            Most of my respositories are private, however. They
                            are not yet ready for the public eyes!
                        </h3>

                        <a href="https://github.com/dufferzz">
                            <button className="buttons">View Now!</button>
                        </a>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <div
                    className="image-box shadow somepadding"
                    style={{ backgroundImage: `url(${dfzstore})` }}
                >
                    <div className="inner">
                        <h1 className="shadow somepadding">
                            DFZ Service and Repair Shop Website
                        </h1>
                        <h3 className="shadow somepadding">
                            This is a project using a MEAN stack. Stripe API,
                            Auth0 integration.
                        </h3>

                        <button className="buttons">
                            <a href="https://testing.dufferz.net">View Now!</a>
                        </button>
                        <button className="buttons">
                            <a href="https://github.com/dufferzz/dfz-store-angular">
                                View Source!
                            </a>
                        </button>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <div
                    className="image-box shadow somepadding"
                    style={{ backgroundImage: `url(${code})` }}
                >
                    <div className="inner">
                        <h1 className="shadow somepadding">
                            Development Experience
                        </h1>
                        <h3 className="shadow somepadding">
                            Below is a small list of languages, frameworks and
                            applications which I am frequently using.
                        </h3>

                        <div
                            className="somePadding"
                            style={{ display: 'flex' }}
                        >
                            <div style={{ width: 50 + '%' }}>
                                <h3>Languages</h3>
                                <p>Javascript</p>
                                <p>HTML &amp; CSS</p>
                                <p>TypeScript</p>
                                <p>GoLang</p>
                                <p>C / C++</p>
                                <p>Python</p>
                            </div>
                            <div style={{ width: 50 + '%' }}>
                                <h3>Frameworks / Libs</h3>
                                <p>Mongoose</p>
                                <p>Angular</p>
                                <p>Boost</p>
                                <p>React JS</p>
                                <p>SDL2</p>
                                <p>Mux</p>
                                <p>Django</p>
                                <p></p>
                            </div>
                        </div>
                        <h3 className="somepadding"></h3>

                        <div style={{ display: 'flex' }}>
                            <div style={{ width: 50 + '%' }}>
                                <h3>Applications</h3>
                                <p>MongoDB Compass</p>
                                <p>SpaceVim</p>
                                <p>Postman</p>
                                <p>DBeaver</p>
                                <p>Cutter / Radare 2</p>
                                <p>Docker / Kubernetes</p>
                                <p>MiniKube</p>
                                <p>k8s</p>
                                <p>MPLabX</p>
                            </div>
                            <div style={{ width: 50 + '%' }}>
                                <h3>Platforms</h3>
                                <p>GCP</p>
                                <p>AWS</p>
                                <p>FireBase</p>
                                <p>DigitalOcean</p>
                            </div>
                        </div>

                        <div></div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}
