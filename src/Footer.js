import React from "react";
import Twitter from "./Images/Twitter-Icon.png"
import Facebook from "./Images/Facebook-Icon.png"
import Instagram from "./Images/Instagram-Icon.png"
import Github from "./Images/GitHub-Icon.png"

export default function Footer () {
    return (
        <div className="footer">
            <img src={Twitter} alt="Twitter icon" />
            <img src={Facebook} alt="Facebook icon" />
            <img src={Instagram} alt="Instagram icon" />
            <img src={Github} alt="Github icon" />
        </div>
    )
}