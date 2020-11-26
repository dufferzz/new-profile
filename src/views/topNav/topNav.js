import React from 'react'
import './topNav.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
