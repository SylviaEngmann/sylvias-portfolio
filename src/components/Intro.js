import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';

function Intro () {

        return(
            <div className="intro">
                <h1>Hi, I'm Sylvia - </h1>

                <Typewriter
						options={{
							strings: ['A Software Engineer.', 'A Full Stack Engineer.', 'A Web Designer.'],
							autoStart: true,
							loop: true,
                            wrapperClassName: "introText"
						}}
				/>
            </div> 
        )
    }

export default Intro;