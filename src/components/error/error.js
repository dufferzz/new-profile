import React, { Component } from 'react'
import './error.css'
import '../card/card.css'
export default class Error extends Component {
    render() {
        return (
            <div style={{color:"white", display:'flex',alignItems:"center",height:100+'%', justifyContent:'center'}}>
                    <div className="inner" style={{textAlign:"center"}}>
                    <h1>
                        {this.props.message}
                    </h1>
                    <h2 style={{paddingTop:1+"rem"}}>
                        Error: {this.props.error}
                    </h2>
                    <h3 style={{padding:1+"rem"}}>
                        {Date().toLocaleString()}
                    </h3>
                    <button className="buttons">Retry</button>
                    </div>
                </div>
        )
    }
}
