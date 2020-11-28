import React from 'react'

import dfzstore from '../../assets/images/concrete.webp'
import carb from '../../assets/images/carb.webp'
import code from '../../assets/images/code.webp'
import '../../components/card/card.css'

import Card from '../../components/card/card'

export default function Projects() {
    return (
        <div>
            <Card
                heading="Check Out My Github Repos!"
                background={carb}
                subheading="I have made a selection of my repositories public,
                so people may explore as they wish."
                subsubheading="Most of my respositories are private, however. They
                are not yet ready for the public eyes!"
            >
                <a href="https://github.com/dufferzz">
                    <button className="buttons">View Now!</button>
                </a>
            </Card>
            <Card
                heading="DFZ Service and Repair Shop Website"
                background={dfzstore}
                subheading="This is a project using a MEAN stack. Stripe API,
                Auth0 integration."
            >
                <button className="buttons">
                    <a href="https://testing.dufferz.net">View Now!</a>
                </button>
                <a href="https://github.com/dufferzz/dfz-store-angular">
                    <button className="buttons">View Source</button>
                </a>
            </Card>
            <Card
                heading="Development Experience"
                background={code}
                subheading=" Below is a small list of languages, frameworks and
                applications which I am frequently using."
            >
                <div className="somePadding" style={{ display: 'flex' }}>
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
            </Card>
        </div>
    )
}
