import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        if (this.props.loading == 'true') {
            return (
                <div
                    style={{
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        height: 100 + '%',
                        justifyContent: 'center',
                    }}
                >
                    <h1>Loading...</h1>
                </div>
            )
        } else {
            return <div>{this.props.loading}</div>
        }
    }
}
