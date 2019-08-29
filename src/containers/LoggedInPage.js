import React from 'react';
import { Button } from 'reactstrap';

class LoggedIn extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                view: "default",
                studentDataObject: ""
            }
        }
    }
    routing = (param, studentData = "") => {
        this.setState(
            {
                view: param,
                studentDataObject: studentData

            }
        )

    }
    renderFunction = () => {
        if (this.state.view == "default") {
            return <LoggedInPageDefaultView routing={this.routing} />
        }
        else if (this.state.view == "studentsTable") {
            return <LoggedInPageStudentsTable studentsRecord={this.props.studentsRecord}
                routing={this.routing} />
        }
        else if (this.state.view == "studentData") {

            return <LoggedInPageStudentData studentDataObject={this.state.studentDataObject} />
        }

    }
    render() {
        return (
            <>
                <div className="logoutButtonDiv">
                    <Button color="danger" onClick={() => this.props.prop("loggedOut")}>
                        Logout
            </Button></div>
                {this.renderFunction()}
            </>
        )
    }
}

class LoggedInPageDefaultView extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                arr1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            }
        }
    }
    render() {
        return (
            <div className="studentPortalDefaultView">
                {this.state.arr1.map((param, ind) => {
                    return <div >
                        <Button className="studentPortalClassesButton"
                            onClick={() => this.props.routing("studentsTable")}>
                            <p>Class{param}</p></Button></div>
                }
                )}
            </div>
        )
    }
}
class LoggedInPageStudentsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    // CallerFunction = (renderFunctionParam, routingFunctionParam) => {        
    //     this.props.setStudentDataProp(renderFunctionParam)
    //     this.props.routing(routingFunctionParam);       
    // }
    render() {
        return (
            <div id="studentPortalTableDiv">
                <table id="studentPortalTable">
                    <tr>
                        <th className="studentPortalTableCells">S.No.</th>
                        <th className="studentPortalTableCells">Name Of Student</th>
                        <th className="studentPortalTableCells">Father Name</th>
                        <th className="studentPortalTableCells"></th>
                        <th className="studentPortalTableCells"></th>

                    </tr>
                    {this.props.studentsRecord.map((obj, index) => {
                        return <tr className="studentPortalTableCells">
                            <td className="studentPortalTableCells">
                                {index + 1}
                            </td>
                            <td className="studentPortalTableCells">
                                <a > {obj.name}</a>
                            </td>
                            <td className="studentPortalTableCells">
                                {obj.fName}
                            </td>
                            <td className="studentPortalTableCells">
                                <Button className="LoggedInPageTableButtons" color="warning"
                                    onClick={() => this.props.routing("studentData", obj)}
                                >Edit</Button>
                            </td>
                            <td className="studentPortalTableCells">
                                <Button className="LoggedInPageTableButtons"
                                    color="danger">Delete</Button>
                            </td>
                        </tr>
                    }
                    )
                    }
                </table>
            </div>
        )
    }
}
class LoggedInPageStudentData extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {

            }
        }
    }
    render() {
        return (
            <>
                <div><label><span className="studentDataSpan">Name:</span><input placeholder={this.props.studentDataObject.name} ></input></label></div>
                <div><label><span className="studentDataSpan">Father Name:  </span><input placeholder={this.props.studentDataObject.fName} ></input></label></div>
                <div><label><span className="studentDataSpan">Dues left:    </span><input placeholder={this.props.studentDataObject.duesLeft} ></input></label></div>
                <div><label><span className="studentDataSpan">Class Teacher:</span><input placeholder={this.props.studentDataObject.classTeacher} ></input></label></div>
                <div><label><span className="studentDataSpan">Monthly Attendance:</span><input placeholder={this.props.studentDataObject.monthlyAttendance} ></input></label></div>
                <div><label><span className="studentDataSpan">Test record:</span><input placeholder={this.props.studentDataObject.testRecord} ></input></label></div>
                <div><label><span className="studentDataSpan">Overall Status:</span><input placeholder={this.props.studentDataObject.overallStatus} ></input></label></div>
                <Button color="warning">Apply Changes</Button>
            </>
        )
    }
}
export default LoggedIn;