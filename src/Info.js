import React from "react";
import profilePicture from "./Images/profile-picture.JPG"
import Mail from "./Images/Mail.png"
import LinkedIn from "./Images/LinkedIn.png"

export default function Info () {
    return (
        <div className="info-section">
            <img src={profilePicture} alt="profile pic" className="profile-pic"/>
            <h1 className="info-name">Aliff Zaifuddin</h1>
            <h3 className="info-role">FrontEnd Developer</h3>
            <h4 className="info-website">aliffzaifuddin.website</h4>
            <div className="info-button">
                <button className="info-email"><img src={Mail} alt="Mail" className="mail-icon"/>Email</button>
                <button className="info-linkedin"><img src={LinkedIn} alt="LinkedIn" />LinkedIn</button>
            </div>            
        </div>
    )
}