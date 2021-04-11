import React, {Component} from 'react';
import profileImage from '../assets/image.png';
import '../App.css';


class ProfileImage extends Component {
    render(){
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
}

export default ProfileImage;