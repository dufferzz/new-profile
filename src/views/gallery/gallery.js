import React, { Component } from 'react'
import './gallery.css'

export default class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOfImages: this.getImagesInFolder() 
    }
  }
    importAll(r) {
        return r.keys().map(r)
    }
  getImagesInFolder(){
    return this.importAll(
            require.context('./images/nature/', false, /\.(png|jpe?g|svg)$/)
        )
  }
    render() {
        return (
            <div>
                {this.state.listOfImages.map((image, index) => (
                  <div
                        key={index}
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
