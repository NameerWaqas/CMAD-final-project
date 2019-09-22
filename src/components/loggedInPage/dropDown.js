import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import firebase from "firebase";
export default class DropDownLoggedInPage extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    changePassword = () => {
        let passwrod = prompt("Enter new passwrod");
        if (passwrod == "") {
            return
        }
        else {
            firebase.auth().currentUser.updatePassword(passwrod).then(() => {
                alert("Succesfully changed password");
            }).catch((err)=>{
                alert(err);
            })
        }
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                <DropdownToggle color="primary" className="DropDownButton" caret>
                    Tap me!
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem className="DropDownButtons" onClick={() => this.props.setTodos()}>
                        {(this.props.todos === false) ? "Todos" : "Dashboard"}</DropdownItem>
                    <DropdownItem className="DropDownButtons" onClick={() => this.props.setDiary()}>
                        {(this.props.diary === false) ? "UpdateDiary" : "Dashboard"}</DropdownItem>
                    <DropdownItem className="DropDownButtons" onClick={() => this.props.setForms()}>
                        {(this.props.formsBtn === false) ? "Forms" : "Dashboard"}</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="DropDownButtons" onClick={() => this.changePassword()}>Change Password</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}