import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DorpDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle color="primary" className="DropDownButton" caret>
          Tap me!
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem ><a className="DropDownButtons" href="/" id="q">Home</a></DropdownItem>
          <DropdownItem><a className="DropDownButtons" href="/studentPortal">Student Portal</a></DropdownItem>
          <DropdownItem ><a className="DropDownButtons" href="/events">Events</a></DropdownItem>
          <DropdownItem><a className="DropDownButtons" href="/aboutUs">About Us</a></DropdownItem>
          <DropdownItem><a className="DropDownButtons" href="/contactus">Contact Us</a></DropdownItem>
          <DropdownItem divider />
          <DropdownItem><a  className="DropDownButtons" href="/login">Login</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}