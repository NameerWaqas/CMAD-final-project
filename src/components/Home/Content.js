import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Button } from "reactstrap"
import aboutUsImg from "../../images/homePageAboutUsImg.png"
import eventsImg from "../../images/homePageEventsImg.png";
import hatImg from "../../images/college graduation.png";
import portal from "../../images/homePageStudentPortalImg.png";
import { Link } from "react-router-dom";
import firebase from "firebase";


class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <h1>Why this School</h1>
                <p id="HomeContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <Parallax
                    // blur={10}
                    bgImage={require('../../images/homepageimg.jpg')}
                    bgImageAlt="the cat"
                // strength={100}
                >
                    <div style={{ height: '450px'}} />
                </Parallax>
                <div >
                    <h2>Silent Features..</h2>
                    <p>
                        <ul id="HomecContentList">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat diam vitae euismod tincidunt. Donec sit amet congue augue. Suspendisse.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed lacinia lacus. Vestibulum interdum tellus tempus dolor interdum egestas. Fusce sit amet nulla purus. Cras.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat diam vitae euismod tincidunt. Donec sit amet congue augue. Suspendisse.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.</li>
                        </ul>
                    </p>
                </div>

                <section className="aboutUsHomeSection">
                    <article className="aboutUsHomearticle1">
                        <h1>Bring You A Quality Education</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.</p>
                        <div><Button color="primary"><Link style={{ color: "white" }} to="/aboutUs">Discover more--></Link></Button></div>
                    </article>

                    <article className="aboutUsHomearticle2">
                        <img src={aboutUsImg} />
                    </article>
                </section>

                <section className="eventsHomeSection" style={{ overflow: "hidden" }}>
                    <article className="evntsHomeArticle">
                        <h1 id="evntsHomeArticleH1"> OUR <br />EVENTS</h1>
                        <img id="rotateimg" src={eventsImg} />
                    </article>
                    <article>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.
    
                    </p>
                        <div><Button color="primary"><Link style={{ color: "white" }} to="/events">Discover more --></Link></Button></div>
                    </article>
                </section>

                <section id="studentPortalHomeSection">
                    <atricle id="studentPortalHomeArticle">
                        <div id="studentPortalHomediv1"><img src={hatImg} style={{ height: "400px", width: "150px" }} /></div>
                        <div id="studentPortalHomediv2">
                            <h1>
                                STUDENT <br /> PORTAL
                        </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.
                        </p>
                            <div style={{ textAlign: "center" }}><Button color="primary"><Link style={{ color: "white" }} to="/studentPortal">Discover More--></Link></Button></div>
                        </div>
                    </atricle>

                </section>

                <Parallax style={{}}
                    // blur={3}
                    bgImage={require('../../images/admissionFormBackground.jpg')}
                    bgImageAlt="the cat"
                // strength={100}
                >
                    <div style={{ height: '630px' }} ><AdmissionForm updateForm={this.props.updateForm} /></div>
                </Parallax>

                <section id="contactUsHomeSection">
                    <atricle id="contactUsHomeArticle">
                        <h1>
                            CONTACT <br /> US
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquam augue. Pellentesque nec congue.
                        </p>
                        <div><Button color="primary"><Link style={{ color: "white" }} to="/contactUs">Discover More--></Link></Button></div>
                    </atricle>
                </section>
                        <div style={{backgroundColor:"#0292e6",color:"white"}}>
                        <Link style={{ color: "white",margin:"1%" }} to="/login">LOGIN</Link>| 
                        <Link style={{ color: "white",margin:"1%" }} to="/diary">DIARY</Link></div>
                        <div style={{backgroundColor:"#0292e6",color:"white"}}>
                        <a style={{backgroundColor:"#0292e6",color:"white"}} href="https://github.com/NameerWaqas/CMAD-final-project">View Source Code</a></div>
            </div>
        )
    }
}

class AdmissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "",
            fName: "",
            number: "",
            email: "",
            relation: "",
            admissionClass: "1"
        }
    }
    setEvent = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    gmailAuthentication = () => {
        let base_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(base_provider).then((res) => {
            this.props.updateForm(this.state)
        }).catch((err) => {
            alert(err)
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <section
                    style={{
                        display: "inline-block", textAlign: "left", width: "96%", margin: "2%", color: "white"
                    }}>
                    <div style={{ textAlign: "center" }}> <h1>Take Our Services..</h1></div>
                    <form>
                        <label className="studentPortalStudentDataQueryFormLabel">
                            <span>Student Name:</span><input type="text" name="studentName" onChange={(e) => this.setEvent(e)}
                            /></label>

                        <label className="studentPortalStudentDataQueryFormLabel">
                            <span>Father Name:</span><input type="text" name="fName" onChange={(e) => this.setEvent(e)}
                            /></label>

                        <label className="studentPortalStudentDataQueryFormLabel">
                            <span>Applicant's contact #:</span><input type="number" name="number" onChange={(e) => this.setEvent(e)}
                                min="03000000000" max="03999999999" required /></label>

                        <label className="studentPortalStudentDataQueryFormLabel">
                            <span>Applicant's Email:</span><input type="email" name="email" onChange={(e) => this.setEvent(e)}
                                required /></label>
                                
                        <label className="studentPortalStudentDataQueryFormLabel">
                            <span>Applying for class:</span>
                            <select name="admissionClass" onClick={(e) => this.setEvent(e)} >

                                <option value="1" >1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </label>
                        <label className="studentPortalStudentDataQueryFormLabel" >
                            <span>Applicant's relation with student:</span><br />
                            <span >Father</span>  <input type="radio" name="relation" required value="father"
                                onClick={(e) => this.setEvent(e)} /><br />
                            <span>Mother </span> <input type="radio" name="relation" required value="mother"
                                onClick={(e) => this.setEvent(e)} /><br />
                            <span>Guardian </span> <input type="radio" name="relation" required value="guardian"
                                onClick={(e) => this.setEvent(e)} /><br />
                        </label>

                        <div style={{ textAlign: "center" }}><Button type="submit" onClick={() => this.gmailAuthentication()}
                            style={{ width: "50%" }}>submit</Button></div>
                    </form>
                </section>

            </div>
        )
    }
}
export default Content;