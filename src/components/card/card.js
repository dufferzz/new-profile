import { React, Component }from 'react'
import './card.css'
import ScrollAnimation from 'react-animate-on-scroll';



class Card extends Component {
    render() {
        return ( 
<ScrollAnimation duration="1" animateIn="fadeIn" animateOnce="true" offset="75" >

<div className="image-box"
  style={{backgroundImage: `url(${this.props.background || ""})`}}>
    <div className="inner">
        <h1 className="shadow somepadding">
            {this.props.heading}
        </h1>
        <h3 className="shadow somepadding">
            {this.props.subheading}
        </h3>
        <h3 className="shadow somepadding">
            {this.props.subsubheading}
        </h3>
        <h3 className="shadow somepadding">
            {this.props.subsubsubheading}
        </h3>
    </div>
</div>
</ScrollAnimation>


)}
}

export default Card;