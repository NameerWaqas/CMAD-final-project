import React from 'react';
import Home from "./Home";
import LoginPage from "./LoginPage";
import StudentPortal from "./StudentPortal"
class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            view: "home",
        };
    }

    routing = (value) => {
        this.setState({ view: value });
    }
    renderFunction = () => {
        if (this.state.view == "home") {
            return <Home />
        }
        else if (this.state.view == "studentPortal") {
            return <StudentPortal />
        }
        else if (this.state.view == "events") {
            return <StudentPortal />
        }
        else if (this.state.view == "contactUs") {
            return <StudentPortal />
        }
        else if (this.state.view == "aboutUs") {
            return <StudentPortal />
        }
        else if (this.state.view == "login") {
            return <LoginPage />
        }
    }
    render() {
        return (
            <div>
                <div className="NavBar">
                    <span className="NavBarSpan">LOGO</span>
                    <section className="NavBarSection">
                        <button onClick={() => this.routing("home")}>Home</button>
                        <button onClick={() => this.routing("studentPortal")}>Student Portal</button>
                        <button onClick={() => this.routing("events")}>Events</button>
                        <button onClick={() => this.routing("aboutUs")}>About Us</button>
                        <button onClick={() => this.routing("contactUs")}>Contact Us</button>
                        <button onClick={() => this.routing("login")}>Login</button>
                    </section>
                </div>
                <div id="MarginedDiv">
                    {this.renderFunction()}
                </div>
            </div>
        )
    }}
export default NavBar;