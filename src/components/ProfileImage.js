import React from 'react';
import profileImage from '../assets/image.png';
import '../App.css';


function ProfileImage (){

        return(
            <div className="profImage">
                <img 
                className="profileimg"
                src={profileImage}
                alt="Profile"
                />
            </div>
        )
    }

export default ProfileImage;