import React from "react"
import ReactDOM from "react-dom"
import tweeterIcon from "/images/twitter.jpeg"
import emailIcon from "/images/mail1.jpeg"
import linkedinIcon from "/images/linkedin.png"
import githubIcon from "/images/github.png"

function Footer(){
    return (
        <div className="foot">
            <img src={tweeterIcon}  alt="" width="55px" height="50px" />
            <img src={emailIcon}  alt="" width="50px" height="50px" />
            <img src={linkedinIcon}  alt="" width="50px" height="50px" />
            <img src={githubIcon}  alt="" width="50px" height="50px" />
        </div>
    )
}



export default Footer