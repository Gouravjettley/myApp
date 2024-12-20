import React from 'react';
import {Button} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram,faFacebook,faSquareTwitter} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <>
     <div className="contact">
      <h1>Share Your Reviews</h1>
      <textarea  cols="30" rows="10" placeholder='write Something'></textarea><br />
      <Button color="secondary">Submit</Button>
    </div>
    <footer  className='foot'>
      <h1 style={{fontWeight:"bolder"}}>Follow us on</h1><br />
      <div className='icons'>
      <ul >
        <a href="https://www.instagram.com/" ><FontAwesomeIcon icon={faSquareInstagram} /></a>
        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://x.com/?lang=en"><FontAwesomeIcon icon={faSquareTwitter} /></a>
       </ul>
      </div>
     
    </footer>
    </>
  )
}

export default Contact;