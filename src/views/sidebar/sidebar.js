import './sidebar.css'
import profilepic from '../../assets/images/profileimage.jpg'
import gitimage from '../../assets/images/Octocat.png'
import React from 'react'
import SidebarLink from './sidebarLink'


export default function Sidebar() {
    return (
        <>
        <div className="sidebar" id="sidebar">
    <a className="name" href="/" title="Go Home">
        <b>Sam Duff</b></a>

    <img alt="Profile " className="avatar" src={profilepic} />

    <a className="sidebar-text shadow"
        style={{fontSize: 20}}
        href="https://www.google.com/maps/place/2010+Str%C3%B8mmen/@59.9457844,10.9897537,14z/data=!3m1!4b1!4m5!3m4!1s0x46417b391189dfa3:0x22c2dcaa39d0fc23!8m2!3d59.9457645!4d11.0072632"
        title="View On Google Maps">
        Strømmen, Akershus</a>

    <SidebarLink url="mailto://dufferz@dufferz.net" text="Dufferz@dufferz.net" />
    
    <hr style={{width:70+'%'}}></hr>
    <SidebarLink url="/" text="Home" />
    <SidebarLink url="/posts" text="Posts / Updates" />
    <SidebarLink url="/projects" text="Projects" />
    <SidebarLink url="/gallery" text="Gallery" />
    
    
    <hr style={{width:70+'%'}}></hr>

    <a href="http://github.com/dufferzz/">
        <img title="View My Github" style={{width:50+'px'}} src={gitimage} className="shadow" alt="github logo"></img>
    </a>
    
    <SidebarLink url="http://github.com/dufferzz/new-profile" text="View Source" />
</div>

<div className="topnav" id="topNav">
    <a href="/">Home</a>
    <a href="/gallery">Gallery</a>
    <a href="/posts">Posts</a>
    <a href="/projects">Projects</a>
</div>
</>
    )
}
