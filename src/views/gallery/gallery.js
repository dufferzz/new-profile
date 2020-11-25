import React, { Component } from 'react'
import './gallery.css'
let listOfImages = []

export default class Gallery extends Component {
    importAll(r) {
        return r.keys().map(r)
    }
    componentWillMount() {
        listOfImages = this.importAll(
            require.context('./images/nature/', false, /\.(png|jpe?g|svg)$/)
        )
        console.log(listOfImages[0].default)
    }
    render() {
        return (
            <div>
                {listOfImages.map((image, index) => (
                    <div
                        className="galleryPic shadow somepadding"
                        style={{
                            backgroundImage: `url(${image.default})`,
                            height: 70 + 'vh',
                        }}
                    ></div>
                ))}
            </div>
        )
    }
}
