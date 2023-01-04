import React from "react"
import ReactDOM from "react-dom"
import profilePhoto from "/images/photo.png"
import emailIcon from "/images/mail1.jpeg"
import linkedinIcon from "/images/linkedin.jpeg"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import { IoLogoLinkedin } from "react-icons/io";
import { BsEnvelopeFill } from "react-icons/bs";


function Info() {
  return (
   <div className="info-container">
    <img src={profilePhoto} alt="" width="250px" height="250px" />
    <h2 className="name">Hiwot Woldesemayat</h2>
    <h3 className="developer">Software Developer</h3>
    <button className="emailbtn"><img src={emailIcon}  alt="" width="25px" height="20px" />Email</button>

    <button className="btn"><img src={linkedinIcon}  alt="" width="25px" height="20px" />Linkedin</button>
   </div>
  );
}

export default Info;



{/* <h1 className="name">Hiwot Woldesemayat</h1>
    <h3 className="developer">Software Developer</h3>
    <button className="emailbtn"><p className="emailicon"></p><p className="emailtext"><BsEnvelopeFill />Email</p></button>
    <button className="btn"><p className="icon"><IoLogoLinkedin /></p><p className="text">Linkedin</p></button> */}
{/* <Card style={{ width: '18rem' }}>
<Card.Img variant="top" className="photo-img" src="photo.JPG/100px180" />
<Card.Body >
  <Card.Title className="name">Hiwot Woldesemayat</Card.Title>
  <Card.Title className="developer">Software Developer</Card.Title>
  <Button variant="primary" className="btn"><p className="text"><p className="icon"><IoLogoLinkedin/></p>Linkedin</p></Button>
</Card.Body>
</Card> */}