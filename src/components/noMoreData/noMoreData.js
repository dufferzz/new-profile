import React, { Component } from 'react'

export default class NoMoreData extends Component {
    render() {
        if (this.props.show === false) {
            return (
                <div
                    style={{
                        width: 100 + '%',
                        textAlign: 'center',
                        color: 'white',
                        marginBottom: 1 + 'rem',
                    }}
                >
                    <h1>No more data available</h1>
                </div>
            )
        } else {
            return <div>{this.props.show}</div>
        }
    }
}
