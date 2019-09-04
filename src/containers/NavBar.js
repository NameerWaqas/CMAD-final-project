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
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu:65,
                    pst:60,
                    science:77,
                    islamiat:70,
                    computer:90,
                    maths:85


                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu:55,
                    pst:70,
                    science:70,
                    islamiat:80,
                    computer:60,
                    maths:80

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu:65,
                    pst:78,
                    science:90,
                    islamiat:60,
                    computer:80,
                    maths:70
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu:75,
                    pst:79,
                    science:60,
                    islamiat:68,
                    computer:95,
                    maths:90
                },
                {
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu:65,
                    pst:60,
                    science:77,
                    islamiat:70,
                    computer:90,
                    maths:85


                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu:55,
                    pst:70,
                    science:70,
                    islamiat:80,
                    computer:60,
                    maths:80

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu:65,
                    pst:78,
                    science:90,
                    islamiat:60,
                    computer:80,
                    maths:70
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu:75,
                    pst:79,
                    science:60,
                    islamiat:68,
                    computer:95,
                    maths:90
                },{
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu:65,
                    pst:60,
                    science:77,
                    islamiat:70,
                    computer:90,
                    maths:85


                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu:55,
                    pst:70,
                    science:70,
                    islamiat:80,
                    computer:60,
                    maths:80

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu:65,
                    pst:78,
                    science:90,
                    islamiat:60,
                    computer:80,
                    maths:70
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu:75,
                    pst:79,
                    science:60,
                    islamiat:68,
                    computer:95,
                    maths:90
                },{
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu:65,
                    pst:60,
                    science:77,
                    islamiat:70,
                    computer:90,
                    maths:85


                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu:55,
                    pst:70,
                    science:70,
                    islamiat:80,
                    computer:60,
                    maths:80

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu:65,
                    pst:78,
                    science:90,
                    islamiat:60,
                    computer:80,
                    maths:70
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu:75,
                    pst:79,
                    science:60,
                    islamiat:68,
                    computer:95,
                    maths:90
                },{
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu:65,
                    pst:60,
                    science:77,
                    islamiat:70,
                    computer:90,
                    maths:85


                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu:55,
                    pst:70,
                    science:70,
                    islamiat:80,
                    computer:60,
                    maths:80

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu:65,
                    pst:78,
                    science:90,
                    islamiat:60,
                    computer:80,
                    maths:70
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu:75,
                    pst:79,
                    science:60,
                    islamiat:68,
                    computer:95,
                    maths:90
                },{
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu:65,
                    pst:60,
                    science:77,
                    islamiat:70,
                    computer:90,
                    maths:85


                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu:55,
                    pst:70,
                    science:70,
                    islamiat:80,
                    computer:60,
                    maths:80

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu:65,
                    pst:78,
                    science:90,
                    islamiat:60,
                    computer:80,
                    maths:70
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu:75,
                    pst:79,
                    science:60,
                    islamiat:68,
                    computer:95,
                    maths:90
                },{
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu:65,
                    pst:60,
                    science:77,
                    islamiat:70,
                    computer:90,
                    maths:85


                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu:55,
                    pst:70,
                    science:70,
                    islamiat:80,
                    computer:60,
                    maths:80

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu:65,
                    pst:78,
                    science:90,
                    islamiat:60,
                    computer:80,
                    maths:70
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu:75,
                    pst:79,
                    science:60,
                    islamiat:68,
                    computer:95,
                    maths:90
                },{
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu:65,
                    pst:60,
                    science:77,
                    islamiat:70,
                    computer:90,
                    maths:85


                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu:55,
                    pst:70,
                    science:70,
                    islamiat:80,
                    computer:60,
                    maths:80

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu:65,
                    pst:78,
                    science:90,
                    islamiat:60,
                    computer:80,
                    maths:70
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu:75,
                    pst:79,
                    science:60,
                    islamiat:68,
                    computer:95,
                    maths:90
                },{
                    name: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu:65,
                    pst:60,
                    science:77,
                    islamiat:70,
                    computer:90,
                    maths:85


                },
                {
                    name: "Sabeer Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu:55,
                    pst:70,
                    science:70,
                    islamiat:80,
                    computer:60,
                    maths:80

                },
                {
                    name: "Faiez Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu:65,
                    pst:78,
                    science:90,
                    islamiat:60,
                    computer:80,
                    maths:70
                },
                {
                    name: "farzan Waqas",
                    fName: "Abdul Wahab",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu:75,
                    pst:79,
                    science:60,
                    islamiat:68,
                    computer:95,
                    maths:90
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
                        <button><a style={{ color: "white" }} href="/">Home</a></button>
                        <button><a style={{ color: "white" }} href="/studentPortal">Student Portal</a></button>
                        <button><a style={{ color: "white" }} href="/events">Events</a></button>
                        <button><a style={{ color: "white" }} href="/aboutUs">About Us</a></button>
                        <button><a style={{ color: "white" }} href="/contactus">Contact Us</a></button>
                        <button><a style={{ color: "white" }} href="/login">Login</a></button>
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