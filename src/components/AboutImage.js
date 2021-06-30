import React from 'react';
import aboutImage from '../assets/SE.png';
import '../App.css';


function AboutImage (){
        return(
            <div>
                <img 
                className="aboutimg"
                src={aboutImage}
                alt="About"
                />
            </div>
        )
    }


export default AboutImage;