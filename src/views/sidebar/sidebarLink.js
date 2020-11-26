import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './sidebar.css'

export default class SidebarLink extends Component {
    scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    render() {
        return (
            <>
                <Link
                    onClick={this.scrollTop}
                    className="sidebar-text shadow"
                    to={this.props.url}
                >
                    {this.props.text}
                </Link>
            </>
        )
    }
}
