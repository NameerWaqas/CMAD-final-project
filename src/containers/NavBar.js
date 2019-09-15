import React from 'react';
import Home from "./Home";
import LoginPage from "./LoginPage";
import StudentPortal from "./StudentPortal";
import Events from "./Events";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import DropDown from "../components/NavBarDropDown/DropDown";
import { BrowserRouter, Route, Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            view: "home",
            class1: [
                {
                    name: "Syed zair",
                    fName: "Mehdi Rizvi",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu: 65,
                    pst: 60,
                    science: 77,
                    islamiat: 70,
                    computer: 90,
                    maths: 85


                },
                {
                    name: "Hamza Iqbal",
                    fName: "Iqbal-ud-din",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu: 55,
                    pst: 70,
                    science: 70,
                    islamiat: 80,
                    computer: 60,
                    maths: 80

                },
                {
                    name: "Syed Saif",
                    fName: "Ahmed",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu: 65,
                    pst: 78,
                    science: 90,
                    islamiat: 60,
                    computer: 80,
                    maths: 70
                },
                {
                    name: "Ayaz Ahmed",
                    fName: "Ahmed Malik",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu: 75,
                    pst: 79,
                    science: 60,
                    islamiat: 68,
                    computer: 95,
                    maths: 90
                },
                {
                    name: "Talha",
                    fName: "Ahmed",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu: 65,
                    pst: 60,
                    science: 77,
                    islamiat: 70,
                    computer: 90,
                    maths: 85


                },
                {
                    name: "Faiq",
                    fName: "Ahmed",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu: 55,
                    pst: 70,
                    science: 70,
                    islamiat: 80,
                    computer: 60,
                    maths: 80

                },
                {
                    name: "Sameer",
                    fName: "Maqsood",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu: 65,
                    pst: 78,
                    science: 90,
                    islamiat: 60,
                    computer: 80,
                    maths: 70
                },
                {
                    name: "Qasim",
                    fName: "Ali",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu: 75,
                    pst: 79,
                    science: 60,
                    islamiat: 68,
                    computer: 95,
                    maths: 90
                }, {
                    name: "Owais",
                    fName: "Ahmed",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu: 65,
                    pst: 60,
                    science: 77,
                    islamiat: 70,
                    computer: 90,
                    maths: 85


                },
                {
                    name: "Hamza",
                    fName: "Malik",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu: 55,
                    pst: 70,
                    science: 70,
                    islamiat: 80,
                    computer: 60,
                    maths: 80

                },
                {
                    name: "Gulshad",
                    fName: "Malik",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu: 65,
                    pst: 78,
                    science: 90,
                    islamiat: 60,
                    computer: 80,
                    maths: 70
                },
                {
                    name: "Younus",
                    fName: "Mansoor",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu: 75,
                    pst: 79,
                    science: 60,
                    islamiat: 68,
                    computer: 95,
                    maths: 90
                }, {
                    name: "Aamir",
                    fName: "Zia-ud-din",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu: 65,
                    pst: 60,
                    science: 77,
                    islamiat: 70,
                    computer: 90,
                    maths: 85


                },
                {
                    name: "Talha",
                    fName: "Maqsood",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu: 55,
                    pst: 70,
                    science: 70,
                    islamiat: 80,
                    computer: 60,
                    maths: 80

                },
                {
                    name: "Malik",
                    fName: "Gulshad",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu: 65,
                    pst: 78,
                    science: 90,
                    islamiat: 60,
                    computer: 80,
                    maths: 70
                },
                {
                    name: "Waqar",
                    fName: "Ahmed",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu: 75,
                    pst: 79,
                    science: 60,
                    islamiat: 68,
                    computer: 95,
                    maths: 90
                }, {
                    name: "Ahmed",
                    fName: "Ayaz",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu: 65,
                    pst: 60,
                    science: 77,
                    islamiat: 70,
                    computer: 90,
                    maths: 85


                },
                {
                    name: "Sameer",
                    fName: "Ahmed",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu: 55,
                    pst: 70,
                    science: 70,
                    islamiat: 80,
                    computer: 60,
                    maths: 80

                },
                {
                    name: "Fahed",
                    fName: "Rashid",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu: 65,
                    pst: 78,
                    science: 90,
                    islamiat: 60,
                    computer: 80,
                    maths: 70
                },
                {
                    name: "Amaan",
                    fName: "Hamza",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu: 75,
                    pst: 79,
                    science: 60,
                    islamiat: 68,
                    computer: 95,
                    maths: 90
                }, {
                    name: "Arham",
                    fName: "Umer",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu: 65,
                    pst: 60,
                    science: 77,
                    islamiat: 70,
                    computer: 90,
                    maths: 85


                },
                {
                    name: "Qamar",
                    fName: "Malik",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu: 55,
                    pst: 70,
                    science: 70,
                    islamiat: 80,
                    computer: 60,
                    maths: 80

                },
                {
                    name: "Rizwan",
                    fName: "Ahmed",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu: 65,
                    pst: 78,
                    science: 90,
                    islamiat: 60,
                    computer: 80,
                    maths: 70
                },
                {
                    name: "Farhan",
                    fName: "Malik",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu: 75,
                    pst: 79,
                    science: 60,
                    islamiat: 68,
                    computer: 95,
                    maths: 90
                }, {
                    name: "Sabir",
                    fName: "Ali",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu: 65,
                    pst: 60,
                    science: 77,
                    islamiat: 70,
                    computer: 90,
                    maths: 85


                },
                {
                    name: "Wajahat",
                    fName: "Ayub",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu: 55,
                    pst: 70,
                    science: 70,
                    islamiat: 80,
                    computer: 60,
                    maths: 80

                },
                {
                    name: "Munaf",
                    fName: "Malik",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu: 65,
                    pst: 78,
                    science: 90,
                    islamiat: 60,
                    computer: 80,
                    maths: 70
                },
                {
                    name: "Mustafa",
                    fName: "Fahad",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu: 75,
                    pst: 79,
                    science: 60,
                    islamiat: 68,
                    computer: 95,
                    maths: 90
                }, {
                    name: "Saim",
                    fName: "Rizwan",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu: 65,
                    pst: 60,
                    science: 77,
                    islamiat: 70,
                    computer: 90,
                    maths: 85


                },
                {
                    name: "Moiz",
                    fName: "Hamza",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu: 55,
                    pst: 70,
                    science: 70,
                    islamiat: 80,
                    computer: 60,
                    maths: 80

                },
                {
                    name: "Moazzam",
                    fName: "Rizwan",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu: 65,
                    pst: 78,
                    science: 90,
                    islamiat: 60,
                    computer: 80,
                    maths: 70
                },
                {
                    name: "Abdullah",
                    fName: "Alam",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu: 75,
                    pst: 79,
                    science: 60,
                    islamiat: 68,
                    computer: 95,
                    maths: 90
                }, {
                    name: "Farhan",
                    fName: "Ali Waris",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 72,
                    urdu: 65,
                    pst: 60,
                    science: 77,
                    islamiat: 70,
                    computer: 90,
                    maths: 85


                },
                {
                    name: "Werasat",
                    fName: "Malik",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 82,
                    urdu: 55,
                    pst: 70,
                    science: 70,
                    islamiat: 80,
                    computer: 60,
                    maths: 80

                },
                {
                    name: "Mohsin",
                    fName: "Ayaz",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 52,
                    urdu: 65,
                    pst: 78,
                    science: 90,
                    islamiat: 60,
                    computer: 80,
                    maths: 70
                },
                {
                    name: "Haider",
                    fName: "ali moazzam",
                    duesLeft: "None",
                    classTeacher: "Sir Nameer Waqas",
                    classParticipation: "Up to the mark",
                    monthlyAttendance: "80%",
                    testRecord: "Good",
                    overallStatus: "Satisfied",
                    english: 65,
                    urdu: 75,
                    pst: 79,
                    science: 60,
                    islamiat: 68,
                    computer: 95,
                    maths: 90
                }

            ],
            complains: [
                {
                    name: "Saif",
                    fatherName: "Malik",
                    applNo: "01111111111",
                    applemail: "testemail@testmail.com",
                    applRel: "father",
                    query: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    `
                },
                {
                    name: "Saif Ali",
                    fatherName: "Ali Haider",
                    applNo: "01111111111",
                    applemail: "testemail@testmail.com",
                    applRel: "father",
                    query: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    `
                }, {
                    name: "Waqar",
                    fatherName: "Qamar",
                    applNo: "01111111111",
                    applemail: "testemail@testmail.com",
                    applRel: "father",
                    query: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    `
                }, {
                    name: "Rashid",
                    fatherName: "Abbasi",
                    applNo: "01111111111",
                    applemail: "testemail@testmail.com",
                    applRel: "father",
                    query: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    `
                }, {
                    name: "Daniyal",
                    fatherName: "Ahmed",
                    applNo: "01111111111",
                    applemail: "testemail@testmail.com",
                    applRel: "father",
                    query: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    `
                }
            ]
        };
    }
    deleteStudent = key => {       
        var newData = this.state.class1.splice(key, 1);
        this.setState(
            {
                class1: this.state.class1                

            }
        )
        // alert(this.state.class1)
    }
    updateStudentRecord = (param) => {

        this.setState({
            class1: [...this.state.class1,
            {
                name: param.name,
                fName: param.fName,
                duesLeft: param.dues,
                classTeacher: param.teacher,
                classParticipation: "",
                monthlyAttendance: param.attendance,
                testRecord: param.testRecord,
                overallStatus: "",
                english: "72",
                urdu: "60",
                pst: "75",
                science: "80",
                islamiat: "67",
                computer: "85",
                maths: "95"


            }]
        }
        )
    }

    sortCheck = () => {
        this.state.class1.sort(function (obj1, obj2) {
            let nameA = obj1.name.toUpperCase(), nameB = obj2.name.toUpperCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        })
    }
    render() {
        this.sortCheck();

        return (
            <BrowserRouter>
                <div className="NavBar">
                    <span className="NavBarSpan">MySchool</span>
                    <section className="NavBarSection">
                        <button><Link style={{ color: "white" }} to="/">Home</Link></button>
                        <button><Link style={{ color: "white" }} to="/studentPortal">Student Portal</Link></button>
                        <button><Link style={{ color: "white" }} to="/events">Events</Link></button>
                        <button><Link style={{ color: "white" }} to="/aboutUs">About Us</Link></button>
                        <button><Link style={{ color: "white" }} to="/contactus">Contact Us</Link></button>
                        <button><Link style={{ color: "white" }} to="/login">Login</Link></button>
                        {

                        }
                    </section>
                    <section className="DropDown">
                        <DropDown routing={this.routing} />
                    </section>
                </div>
                <div id="gotoTop" />{/*  for navigation b/w bottom to top */}
                <div id="MarginedDiv">
                    <Route exact path="/" component={() => <Home />} />
                    <Route path="/studentPortal" component={() => <StudentPortal view={this.state.class1} />} />
                    <Route path="/events" component={() => <Events />} />
                    <Route path="/aboutUs" component={() => <AboutUs />} />
                    <Route path="/contactUs" component={() => <ContactUs />} />
                    <Route path="/login" component={() => <LoginPage studentsRecord={this.state.class1}
                        deleteStudentFunc={this.deleteStudent} updateStudentRecordFunc={this.updateStudentRecord}
                        complains={this.state.complains} />} />
                </div>
                <footer >
                    <a href="#gotoTop"><label>^</label></a>
                </footer>
            </BrowserRouter>

        )
    }
}
export default NavBar;