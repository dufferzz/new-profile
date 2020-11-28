import React from 'react'
import './topNav.css'
import { Link } from 'react-router-dom'

function TopNav() {
    return (
        <div className="topnav" id="topNav">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default TopNav
