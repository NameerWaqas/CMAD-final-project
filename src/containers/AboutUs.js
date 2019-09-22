import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import aboutUsImg from "../images/aboutUsPageImg.jpg";
import facultyMember1 from "../images/faculty1.jpg";
import facultyMember2 from "../images/faculty2.jpg";
import facultyMember3 from "../images/faculty3.jpg";
import facultyMember4 from "../images/faculty4.jpg";
import facultyMember5 from "../images/faculty5.jpg";
import facultyMember6 from "../images/faculty6.jpg";
import facultyMember7 from "../images/faculty7.jpg";
import facultyMember8 from "../images/faculty8.jpg";




class AboutUs extends React.Component {
    constructor() {
        super()
        this.state = {
            tooltip1Open: false,
            tooltip2Open: false,
            tooltip3Open: false,
            tooltip4Open: false,
            tooltip5Open: false,
            tooltip6Open: false,
            tooltip7Open: false,
            tooltip8Open: false
        }

        this.toggle1 = this.toggle1.bind(this);
    }
    toggle1() {
        this.setState({
            tooltip1Open: !this.state.tooltip1Open
        });
    }
    toggle2 = () => {
        this.setState({
            tooltip2Open: !this.state.tooltip2Open
        });
    }
    toggle3 = () => {
        this.setState({
            tooltip3Open: !this.state.tooltip3Open
        });
    }
    toggle4 = () => {
        this.setState({
            tooltip4Open: !this.state.tooltip4Open
        });
    }
    toggle5 = () => {
        this.setState({
            tooltip5Open: !this.state.tooltip5Open
        });
    }
    toggle6 = () => {
        this.setState({
            tooltip6Open: !this.state.tooltip6Open
        });
    }
    toggle7 = () => {
        this.setState({
            tooltip7Open: !this.state.tooltip7Open
        });
    }
    toggle8 = () => {
        this.setState({
            tooltip8Open: !this.state.tooltip8Open
        });
    }

    render() {
        return (
            <div id="ContactUsPageDiv">
                <section id="aboutUsPageImg"><img src={aboutUsImg} /></section>
                <section>
                    <h2>Our Brief History..</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <Tooltip placement="right" isOpen={this.state.tooltip1Open} target="dummyImg1" toggle={this.toggle1}>
                    dummyImg1
        </Tooltip>
                <Tooltip placement="left" isOpen={this.state.tooltip2Open} target="dummyImg2" toggle={this.toggle2}>
                    dummyImg2
        </Tooltip>
                <Tooltip placement="right" isOpen={this.state.tooltip3Open} target="dummyImg3" toggle={this.toggle3}>
                    dummyImg3
        </Tooltip>
                <Tooltip placement="left" isOpen={this.state.tooltip4Open} target="dummyImg4" toggle={this.toggle4}>
                    dummyImg4!
        </Tooltip>
                <Tooltip placement="right" isOpen={this.state.tooltip5Open} target="dummyImg5" toggle={this.toggle5}>
                    dummyImg5
        </Tooltip>
                <Tooltip placement="left" isOpen={this.state.tooltip6Open} target="dummyImg6" toggle={this.toggle6}>
                    dummyImg6
        </Tooltip>
                <Tooltip placement="right" isOpen={this.state.tooltip7Open} target="dummyImg7" toggle={this.toggle7}>
                    dummyImg7
        </Tooltip>
                <Tooltip placement="left" isOpen={this.state.tooltip8Open} target="dummyImg8" toggle={this.toggle8}>
                    dummyImg8
        </Tooltip>
                <section>
                    <h2>Our Respected Faculty</h2>
                    <article id="displayNotOnTouchScreen">
                        <span className="facultyImageFrame" id="dummyImg1"><img src={facultyMember1} /></span>
                        <span className="facultyImageFrame" id="dummyImg2"><img src={facultyMember2} /></span>
                        <span className="facultyImageFrame" id="dummyImg3"><img src={facultyMember3} /></span>
                        <span className="facultyImageFrame" id="dummyImg4"><img src={facultyMember4} /></span>
                        <span className="facultyImageFrame" id="dummyImg5"><img src={facultyMember5} /></span>
                        <span className="facultyImageFrame" id="dummyImg6"><img src={facultyMember6} /></span>
                        <span className="facultyImageFrame" id="dummyImg7"><img src={facultyMember7} /></span>
                        <span className="facultyImageFrame" id="dummyImg8"><img src={facultyMember8} /></span>
                    </article>
                    <article id="displayOnTouchScreen">
                        <span className="facultyImageFrame" id="dummyImg1"><img src={facultyMember1} /></span>
                        <span className="facultyImageFrame" id="dummyImg2"><img src={facultyMember2} /></span>
                        <span className="facultyImageFrame" id="dummyImg3"><img src={facultyMember3} /></span>
                        <span className="facultyImageFrame" id="dummyImg4"><img src={facultyMember4} /></span>
                        <span className="facultyImageFrame" id="dummyImg5"><img src={facultyMember5} /></span>
                        <span className="facultyImageFrame" id="dummyImg6"><img src={facultyMember6} /></span>
                        <span className="facultyImageFrame" id="dummyImg7"><img src={facultyMember7} /></span>
                        <span className="facultyImageFrame" id="dummyImg8"><img src={facultyMember8} /></span>
                    </article>
                </section>

            </div>
        )
    }
}
export default AboutUs;