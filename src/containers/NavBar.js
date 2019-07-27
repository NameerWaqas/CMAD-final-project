import React from 'react';
import Home from "./Home"
class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            view: "home"
        };
    }

    render() {
        return (
            <div>
                <div className="NavBar">
                    <span className="NavBarSpan">LOGO</span>
                    <section className="NavBarSection">
                        <button>Home</button>
                        <button>Student Portal</button>
                        <button>Events</button>
                        <button>About Us</button>
                        <button>Contact Us</button>
                    </section>
                </div>
                <Home />;
{/* switch (this.state.view) {
    case "home":
        <home/>;
        break;

    default:
        break;
} */}
            </div>
        )
    }
}
export default NavBar;