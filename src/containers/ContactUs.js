import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import contactUsPageParallaxImg from "../images/img1.jpg"

function ContactUs() {
    return (
        <div id="ContactUsPageDiv">
            <div style={{ height: '300px' }} >
                <img src={contactUsPageParallaxImg} style={{ height: '300px', width: '100%' }} alt="not found" />
            </div>
            {/* <img className="ContactUsPageParaalaxImg" src="" /> */}
            <h1>Contact Us Via:</h1>
            <p className="contactUspagePara"><b>Email:</b> <a href="mailto:nameerwaqas321@gmail.com">Send Us an Email.</a></p>
            <p className="contactUspagePara"><b>Facebook:</b> <a href="https://web.facebook.com/nameerwaqas">Contact Us through Facebook.</a></p>
            <p className="contactUspagePara"><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/nameerwaqas/">Contact Us through LinkedIn.</a></p>
            {/* <img className="ContactUsPageParaalaxImg" src="https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_960_720.jpg" /> */}
            <h1>Or visit our campus</h1>
            <div className='iframeDiv'><iframe src="https://maps.google.com/maps?q=university%20of%20karachi%2CUBIT&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>

        </div>
    )
}
export default ContactUs;