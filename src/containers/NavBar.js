import React from 'react';
import Home from "./Home";
import LoginPage from "./LoginPage";
import StudentPortal from "./StudentPortal";
import Events from "./Events";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import DropDown from "../components/NavBarDropDown/DropDown";

class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            view: "home",
            class1: [
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "farzan Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Nameer Waqas",
                    fName:"Abdul Wahab"
                },
                {
                    name: "Sabeer Waqas",
                    fName:"Abdul Wahab"

                },
                {
                    name: "Faiez Waqas",
                    fName:"Abdul Wahab"
                }
            ]
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
            return <StudentPortal view={this.state.class1} />
        }
        else if (this.state.view == "events") {
            return <Events />
        }
        else if (this.state.view == "contactUs") {
            return <ContactUs />
        }
        else if (this.state.view == "aboutUs") {
            return <AboutUs />
        }
        else if (this.state.view == "login") {
            return <LoginPage view={this.state.class1}/>
        }
    }
    render() {
        return (
            <div>
                <div className="NavBar">
                    <span className="NavBarSpan">MySchool</span>
                    <section className="NavBarSection">
                        <button onClick={() => this.routing("home")}>Home</button>
                        <button onClick={() => this.routing("studentPortal")}>Student Portal</button>
                        <button onClick={() => this.routing("events")}>Events</button>
                        <button onClick={() => this.routing("aboutUs")}>About Us</button>
                        <button onClick={() => this.routing("contactUs")}>Contact Us</button>
                        <button onClick={() => this.routing("login")}>Login</button>
                    </section>
                    <section className="DropDown">
                        <DropDown routing={this.routing}/>
                    </section>
                </div>
                <div id="MarginedDiv">
                    {this.renderFunction()}
                </div>
            </div>
        )
    }
}
export default NavBar;