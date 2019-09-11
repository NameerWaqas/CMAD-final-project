import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import LoggedIn from "./LoggedInPage"
import {BrowserRouter, Route} from 'react-router-dom';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {           
            check: "loggedOut"
        }
    }
    // var defaultAuth = firebase.auth();

    LoginPageRouting = () => {
        if (this.state.check == "loggedOut") {
            return <WhenLoggedOut prop={this.UpdateCheck} name="nameer" />
        }
        else if (this.state.check == "loggedIn") {
            return <LoggedIn prop={this.UpdateCheck} studentsRecord={this.props.studentsRecord}  complains={this.props.complains} />
        }
    }
    UpdateCheck = (param) => {
        this.setState(
            {
                check: param
            }
        )
    }

    // Get the Auth service for the default app

    render() {
        return (
            
            this.LoginPageRouting()
            
        )
    }
}
class WhenLoggedOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "somePassword"
            , password: "someID",
            check: false
        }
    }
    getParam = (param, TargetObj) => {
        if (TargetObj == "id") {

            this.state.id = param

        }
        else {

            this.state.password = param

        }
    }
    Authenticate = () => {
        if (this.state.id == "nameer" && this.state.password == "waqas") {
            {
                this.props.prop("loggedIn");
            }
        }
        else
            alert("Invalid Email or Password")


    }
    render() {
        return (
            <div id="LoginPageDiv">
                <div id="LoginPageSection">
                    <h2 >Login as Administrator</h2>
                    {/* <label for="LoginPageEmail" ><p>Email:</p></label>                         */}
                    <Input type="email"
                        id="LoginPageEmail" placeholder="Enter Email=> nameer"
                        onChange={(param) => this.getParam(param.target.value, "id")} />
                    {/* <label for="LoginPagePassword" ><p>Email:</p></label>                         */}
                    <Input type="password"
                        id="LoginPagePassword" placeholder="Enter password=> waqas"
                        onChange={(param) => this.getParam(param.target.value, "password")} />
                    <Button onClick={() => this.Authenticate()}>Submit</Button>
                </div>
            </div>
        )
    }

}
export default LoginPage;