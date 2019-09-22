import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import LoggedIn from "./LoggedInPage"
// import {BrowserRouter, Route} from 'react-router-dom';
import firebase from "firebase";


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
            return <LoggedIn prop={this.UpdateCheck}
                deleteStudentFunc={this.props.deleteStudentFunc} updateStudentRecordFunc={this.props.updateStudentRecordFunc}
                studentsRecord={this.props.studentsRecord} complains={this.props.complains} deleteComplainFunc={this.props.deleteComplainFunc}
                diary={this.props.diary} updateDiary={this.props.updateDiary} forms={this.props.forms}
                deleteForm={this.props.deleteForm} />
        }
    }
    UpdateCheck = (param) => {
        if (param == "loggedOut") {
            firebase.auth().signOut().then(
                console.log("loggedOut")
            )
        }
        this.setState(
            {
                check: param
            }
        )
    }

    // Get the Auth service for the default app
    userStatusTracker = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.UpdateCheck("loggedIn");
                // console.log(user)
            }
        })
    }
    componentDidMount = () => {
        this.userStatusTracker();
    }
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
       
        firebase.auth().signInWithEmailAndPassword(this.state.id, this.state.password).then(res => {
            this.props.prop("loggedIn");
        }).catch(err => alert(err))
        
        // for development timeperiod
        // this.props.prop("loggedIn");

    }

    render() {
        return (
            <div id="LoginPageDiv">
                <div id="LoginPageSection">
                    <h2 >Login as Administrator</h2>

                    <Input type="email"
                        id="LoginPageEmail" placeholder="Enter Email=> admin@auth.com"
                        onChange={(param) => this.getParam(param.target.value, "id")} />

                    <Input type="password"
                        id="LoginPagePassword" placeholder="Enter password=> nameerwaqas"
                        onChange={(param) => this.getParam(param.target.value, "password")} />
                    <Button onClick={() => this.Authenticate()}>Submit</Button>
                </div>
            </div>
        )
    }

}

export default LoginPage;