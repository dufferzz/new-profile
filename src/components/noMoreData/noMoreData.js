import React, { Component } from 'react'

export default class NoMoreData extends Component {
    render() {
        return (
            <div
                style={{
                    display: 'block',
                    textAlign: 'center',
                    color: 'white',
                    margin: 1 + 'rem',
                }}
            >
                <h1>No more data available</h1>
            </div>
        )
    }
}
