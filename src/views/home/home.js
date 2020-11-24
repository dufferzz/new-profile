import React from 'react'
import workshop from '../../assets/images/000.jpg'
import Card from '../../components/card/card'
import '../../components/card/card.css'
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

<div className="image-box shadow somepadding"
  style={{backgroundImage: `url("https://images.unsplash.com/photo-1591808216268-ce0b82787efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80")`}}>
    <div className="inner">
        <h1 className="shadow somepadding">
          Full Stack Developer. Fluent in JS/TS, HTML5, SCSS
        </h1>
        <h3>
          Experienced in React, Angular, NodeJS
        </h3>
        <h3 className="shadow somepadding">
          This site, and my other projects are hosted in GKE
          Kubernetes, upon a cluster of 3 nodes controlled by Argo CD.
        </h3>
        <h3>
          Builds are controlled by a locally hosted Jenkins CI pipeline
        </h3>
        <h3>
          Daily Linux user since Kernel 2.6.4
        </h3>
        <a href="/projects"><button className="buttons">View My Projects</button></a>
    </div>
</div>
<div className="image-box shadow somepadding"
  style={{backgroundImage: `url("https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`}}>
    <div className="inner">
        <h1 className="shadow somepadding">
          Fast Turnaround, Small Engine Mechanic
        </h1>
        <h3>
          Performing rapid turnaround servicing and repairs on small engined machinery (Lawnmowers, Motorcycles, Etc) since 2008
        </h3>
        <h3 className="shadow somepadding">
          
        </h3>
        <h3>
          Large stock of parts to ensure work assignments are returned ASAP.
        </h3>
        <h3 className="somepadding">

        </h3>
        <h3>
          I currently designing high performance cylinder heads for the Yamaha DT125R.. Watch this space ;)
        </h3>
        <a href="/projects"><button className="buttons">Contact Me</button></a>
    </div>
</div>
<div className="image-box shadow somepadding"
  style={{backgroundImage: `url("https://images.pexels.com/photos/185545/pexels-photo-185545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`}}>
    <div className="inner">
        <h1 className="shadow somepadding">
          View My Galleries!
        </h1>
        <h3 className="shadow somepadding">
          Fully loaded with pictures of my experiences, coding environments, and various life things
        </h3>
        <a href="https://photos.app.goo.gl/ELRAQaQH7jbFTncG6"><button className="buttons">Work 2014-2020</button></a>
        <a href="https://photos.app.goo.gl/s5UdBm6BE8pyVoSm9"><button className="buttons">Development Pics</button></a>
    </div>
</div>


        </>
    )
}
