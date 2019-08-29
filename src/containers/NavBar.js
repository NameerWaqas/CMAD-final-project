import React from 'react';
import Home from "./Home";
import LoginPage from "./LoginPage";
import StudentPortal from "./StudentPortal";
import Events from "./Events";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import DropDown from "../components/NavBarDropDown/DropDown";
import { BrowserRouter, Route } from 'react-router-dom';

class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            view: "home",
            class1: [
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied"
                }

            ]
        };
    }
    render() {
        return (
            <BrowserRouter>

                    <div className="NavBar">
                        <span className="NavBarSpan">MySchool</span>
                        <section className="NavBarSection">
                            <button><a style={{color:"white"}} href="/">Home</a></button>
                            <button><a style={{color:"white"}} href="/studentPortal">Student Portal</a></button>
                            <button><a style={{color:"white"}} href="/events">Events</a></button>
                            <button><a style={{color:"white"}} href="/aboutUs">About Us</a></button>
                            <button><a style={{color:"white"}} href="/contactus">Contact Us</a></button>
                            <button><a style={{color:"white"}} href="/login">Login</a></button>
                        </section>
                        <section className="DropDown">
                            <DropDown routing={this.routing} />
                        </section>
                    </div>
                    <div id="MarginedDiv">
                        <Route exact path="/" component={() => <Home />} />
                        <Route path="/studentPortal" component={() => <StudentPortal view={this.state.class1} />} />
                        <Route path="/events" component={() => <Events />} />
                        <Route path="/aboutUs" component={() => <AboutUs />} />
                        <Route path="/contactUs" component={() => <ContactUs />} />
                        <Route path="/login" component={() => <LoginPage studentsRecord={this.state.class1} />} />
                    </div>                
            </BrowserRouter>
        )
    }
}
export default NavBar;