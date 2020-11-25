import React, { Component } from 'react'
import './sidebar.css'

export default class SidebarLink extends Component {
    render() {
        return (
            <a className="sidebar-text shadow" href={this.props.url}>
                {this.props.text}
            </a>
        )
    }
}
