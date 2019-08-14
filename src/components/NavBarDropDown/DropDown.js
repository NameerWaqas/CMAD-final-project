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
      <Dropdown   isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle className="DropDownButton" caret>
          Navigation
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem ><button className="DropDownButtons" onClick={() => this.props.routing("home")}>Home</button></DropdownItem>
          <DropdownItem><button className="DropDownButtons" onClick={() => this.props.routing("studentPortal")}>Student Portal</button></DropdownItem>
          <DropdownItem ><button className="DropDownButtons" onClick={() => this.props.routing("events")}>Events</button></DropdownItem>
          <DropdownItem divider />
          <DropdownItem><button className="DropDownButtons" onClick={() => this.props.routing("aboutUs")}>About Us</button></DropdownItem>
          <DropdownItem> <button className="DropDownButtons" onClick={() => this.props.routing("contactUs")}>Contact Us</button></DropdownItem>
          <DropdownItem><button className="DropDownButtons" onClick={() => this.props.routing("login")}>Login</button></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}