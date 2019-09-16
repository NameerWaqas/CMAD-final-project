import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {  Link } from 'react-router-dom';

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
          <DropdownItem ><Link className="DropDownButtons" to="/" id="q">Home</Link></DropdownItem>
          <DropdownItem><Link className="DropDownButtons" to="/studentPortal">Student Portal</Link></DropdownItem>
          <DropdownItem ><Link className="DropDownButtons" to="/events">Events</Link></DropdownItem>
          <DropdownItem><Link className="DropDownButtons" to="/aboutUs">About Us</Link></DropdownItem>
          <DropdownItem><Link className="DropDownButtons" to="/contactus">Contact Us</Link></DropdownItem>
          <DropdownItem divider />
          <DropdownItem><Link  className="DropDownButtons" to="/login">Login</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}