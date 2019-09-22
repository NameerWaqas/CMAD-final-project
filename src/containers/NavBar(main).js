import React from 'react';
import Home from "./Home";
import LoginPage from "./LoginPage";
import StudentPortal from "./StudentPortal";
import Events from "./Events";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Diary from "./Diary"
import DropDown from "../components/NavBarDropDown/DropDown";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import firebase from "firebase";


class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
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
                },
                {
                    name: "Daniyal",
                    fatherName: "Ahmed",
                    applNo: "01111111111",
                    applemail: "testemail@testmail.com",
                    applRel: "father",
                    query: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    `
                }
            ],
            diary: [
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    english: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    urdu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    islamiat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    pst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    science: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    computer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    maths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },

            ],
            forms: [
                {
                    studentName: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    number: "03122741771    ",
                    email: "nameerwaqas@gmail.com",
                    relation: "father",
                    admissionClass: "15"
                },
                {
                    studentName: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    number: "03122741771    ",
                    email: "nameerwaqas@gmail.com",
                    relation: "father",
                    admissionClass: "15"
                },
                {
                    studentName: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    number: "03122741771    ",
                    email: "nameerwaqas@gmail.com",
                    relation: "father",
                    admissionClass: "15"
                },
                {
                    studentName: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    number: "03122741771    ",
                    email: "nameerwaqas@gmail.com",
                    relation: "father",
                    admissionClass: "15"
                },
                {
                    studentName: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    number: "03122741771    ",
                    email: "nameerwaqas@gmail.com",
                    relation: "father",
                    admissionClass: "15"
                },
                {
                    studentName: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    number: "03122741771    ",
                    email: "nameerwaqas@gmail.com",
                    relation: "father",
                    admissionClass: "15"
                },
                {
                    studentName: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    number: "03122741771    ",
                    email: "nameerwaqas@gmail.com",
                    relation: "father",
                    admissionClass: "15"
                },
                {
                    studentName: "Nameer Waqas",
                    fName: "Abdul Wahab",
                    number: "03122741771    ",
                    email: "nameerwaqas@gmail.com",
                    relation: "father",
                    admissionClass: "15"
                }

            ]
        };

    }
    componentDidMount = () => {
        this.readFromFirebase();

    }

    deleteStudent = key => {
        var newData = this.state.class1.splice(key, 1);
        this.setState(
            {
                class1: this.state.class1

            },
            this.writeInFirebase()
        )

    }
    deleteComplain = key => {
        var newData = this.state.complains.splice(key, 1);
        this.setState(
            {
                complains: this.state.complains

            },
            this.writeInFirebase()
        )

    }
    updateStudentRecord = (param, key = "undefined") => {

        if (key == "undefined") {
            
                this.state.class1=[...this.state.class1,
                {
                    name: param.name,
                    fName: param.fName,
                    duesLeft: param.dues,
                    classTeacher: param.teacher,
                    classParticipation: "",
                    monthlyAttendance: param.attendance,
                    testRecord: param.testRecord,
                    overallStatus: "",
                    english: param.english,
                    urdu: param.urdu,
                    pst: param.pst,
                    science: param.science,
                    islamiat: param.islamiat,
                    computer: param.computer,
                    maths: param.maths


                }]
                this.setState(
                    {
                        class1: this.state.class1
                    },
                    this.writeInFirebase()
                )

                       
            
        }
        else {

            this.state.class1[key] = {
                name: param.name,
                fName: param.fName,
                duesLeft: param.dues,
                classTeacher: param.teacher,
                classParticipation: "",
                monthlyAttendance: param.attendance,
                testRecord: param.testRecord,
                overallStatus: "",
                english: param.english,
                urdu: param.urdu,
                pst: param.pst,
                science: param.science,
                islamiat: param.islamiat,
                computer: param.computer,
                maths: param.maths
            }
            this.setState(
                {
                    class1: this.state.class1
                },
                this.writeInFirebase()
            )
        }
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

    readFromFirebase = () => {
        firebase.database().ref('data').on('value', (snapshot) => {
            let value = snapshot.val();

            console.log(value, "value");

            this.setState({
                class1: value.class1,
                complains: value.complains,
                diary: value.diary,
                forms: value.forms
            });
        })

    }
    updateComplains = (obj) => {

        this.setState({
            complains: [...this.state.complains,
            {
                name: obj.name,
                fatherName: obj.fname,
                applNo: obj.applnum,
                applemail: obj.applemail,
                applRel: obj.applrel,
                query: obj.query
            }]

        },
            this.writeInFirebase()
        )
    }
    updateDiary = (ind, obj) => {
        console.log(ind, obj)
        this.state.diary[ind] = {
            english: obj.english,
            urdu: obj.urdu,
            islamiat: obj.islamiat,
            pst: obj.pst,
            science: obj.science,
            computer: obj.computer,
            maths: obj.maths
        }
        this.setState({
            diary: this.state.diary
        },
            this.writeInFirebase()
        )


    }
    updateForm = (obj) => {
        this.setState({
            forms: [...this.state.forms, obj]
        },
            this.writeInFirebase()
        )
    }
    deleteForm = (key) => {
        let deleteForm = this.state.forms.splice(key, 1);
        this.setState({
            forms: this.state.forms
        },
            this.writeInFirebase()
        )
    }
    writeInFirebase = () => {
        firebase.database().ref('data').set(this.state);
    }

    render() {
        this.sortCheck();
        // this.writeInFirebase();
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
                        <button><Link style={{ color: "white" }} to="/diary">Diary</Link></button>
                        <button><Link style={{ color: "white" }} to="/login">Login</Link></button>

                    </section>
                    <section className="DropDown">
                        <DropDown routing={this.routing} />
                    </section>
                </div>
                <div id="gotoTop" />{/*  for navigation b/w bottom to top */}
                <div id="MarginedDiv">
                    <Route exact path="/" component={() => <Home updateForm={this.updateForm} />} />
                    <Route path="/studentPortal" component={() => <StudentPortal view={this.state.class1}
                        updateComplainsFunc={this.updateComplains} complains={this.state.complains} />} />
                    <Route path="/events" component={() => <Events />} />
                    <Route path="/aboutUs" component={() => <AboutUs />} />
                    <Route path="/contactUs" component={() => <ContactUs />} />
                    <Route path="/diary" component={() => <Diary diary={this.state.diary} />} />
                    <Route path="/login" component={() => <LoginPage studentsRecord={this.state.class1}
                        deleteStudentFunc={this.deleteStudent} deleteComplainFunc={this.deleteComplain} updateStudentRecordFunc={this.updateStudentRecord}
                        complains={this.state.complains} diary={this.state.diary} updateDiary={this.updateDiary}
                        forms={this.state.forms} deleteForm={this.deleteForm} />}
                    />
                </div>
                <footer >
                    <a href="#gotoTop"><label>^</label></a>
                </footer>
            </BrowserRouter>

        )
    }
}
export default NavBar;