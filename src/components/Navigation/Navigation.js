import React,{useEffect} from 'react';
import gsap from 'gsap';

import Hamburger from '../Hamburger/Hamburger';

const Navigation = (props) => {

   

    useEffect((prevState, props) => {
        gsap.from('.Navigation', {
            y: -40,
            opacity: 0,
            skewY: 2,
            duration: 1
        })
    },[])


    return(
        <nav className="Navigation">
                    <h1>TOM GRIFFITHS † </h1> 
                    <h3>{props.title}</h3>
                    <Hamburger {...props}/>
        </nav>
    )
}

export default Navigation;