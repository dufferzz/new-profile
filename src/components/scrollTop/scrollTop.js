import React, {useState} from 'react'
import './scrollTop.css'
export default function ScrollTop() {
    const [showScrollArrow, setShowScroll] = useState(false); // Do we want to show the Scrollly arrow doodad

    const checkScrollTop = () => {
    if(!showScrollArrow && window.pageYOffset > 200){
        setShowScroll(true);
    } else if(showScrollArrow && window.pageYOffset <= 200){
        setShowScroll(false)
    }
    }

    const scrollTop = () =>{
    window.scrollTo({top:0, behavior: "smooth"});
    }
    window.addEventListener('scroll', checkScrollTop);

    if(showScrollArrow){
    return(
        <div onClick={scrollTop} title="Scotty, beam us up, Fast!" className="goToTop">Go Up!</div>

    )
    }
    else{
        return (
            <div></div>
        )
    }
}
