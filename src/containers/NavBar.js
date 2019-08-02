import React from 'react';
import Home from "./Home";
import LoginPage from "./LoginPage";
class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            view: "home",
           // login:"false"
        };
    }
    // loginCheck=(val)=>
    // {
    //     this.setState({
    //        // login:val
    //     })
    //     this.routing("loggedIn")
    // }
    routing = (value) => {
        this.setState({ view: value });
    }
    renderFunction = () => {
        if (this.state.view == "home") {
            return <Home />
        }
        else if (this.state.view == "login") {
            return <LoginPage />
        }
        // else if(this.state.view == "loggedIn")
        // {
        //     return <loggedIn/>
        // }
    }
    render() {
        return (
            <div>
                <div className="NavBar">
                    <span className="NavBarSpan">LOGO</span>
                    <section className="NavBarSection">
                        <button onClick={() => this.routing("home")}>Home</button>
                        <button>Student Portal</button>
                        <button>Events</button>
                        <button>About Us</button>
                        <button>Contact Us</button>
                        <button onClick={() => this.routing("login")}>Login</button>
                    </section>
                </div>
                <div id="MarginedDiv">                 
                     { this.renderFunction() }                 
                </div>
                </div>
        )
    }
}
export default NavBar;