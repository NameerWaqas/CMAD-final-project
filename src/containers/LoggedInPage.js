import React from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

class LoggedIn extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                view: "default",
                studentDataObject: "",
                todos: false
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
        else if (this.state.view == "todos") {

            return <Dashboard complains={this.props.complains} routing={this.routing} />
        }
        else if (this.state.view == "studentsTable") {
            return <LoggedInPageStudentsTable studentsRecord={this.props.studentsRecord}
                deleteStudentFunc={this.props.deleteStudentFunc} 
                routing={this.routing} />
        }
        else if (this.state.view == "studentData") {

            return <LoggedInPageStudentData studentDataObject={this.state.studentDataObject} updateStudentRecordFunc={this.props.updateStudentRecordFunc} />
        }

    }
    setTodosButton = () => {
        if (this.state.todos == false) {
            this.routing("todos");
            this.setState(
                { todos: true }
            )
        }
        else {
            this.routing("default");
            this.setState(
                { todos: false }
            )
        }
    }
    render() {
        return (
            <>
                <div className="logoutButtonDiv">

                    <Button style={{ position: "absolute", left: "1px", width: "100px" }} color="info" onClick={() => this.setTodosButton()}>
                        {(this.state.todos === false) ? "Todos" : "Dashboard"}
                    </Button>
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
                <Button style={{ width: "70%", fontSize: "120%" }}>Add student</Button>

                <table id="studentPortalTable">
                    <tr>
                        <th className="studentPortalTableCells">S.No.</th>
                        <th className="studentPortalTableCells">Name Of Student</th>
                        <th className="studentPortalTableCells">Father Name</th>
                        <th className="studentPortalTableCells">Edit</th>
                        <th className="studentPortalTableCells">Delete</th>

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
                                    onClick={() => this.props.deleteStudentFunc(index)}
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
              name:this.props.studentDataObject.name, fName:this.props.studentDataObject.fName, dues:this.props.studentDataObject.duesLeft, teacher:this.props.studentDataObject.classTeacher, attendance:this.props.studentDataObject.monthlyAttendance, testRecord:this.props.studentDataObject.testRecord, status:this.props.studentDataObject.overallStatus
            }
        }
    }
    // updateStudentRecordFunc={this.props.updateStudentRecord}

    updateState = (e) => {
        this.setState(
            { [e.target.name] : e.target.value }
        )
    }

    render() {
        return (
            <>
                <div><label><span className="studentDataSpan">Name:</span>
                    <input name="name" onChange={(e)=>this.updateState(e)}
                     defaultValue={this.props.studentDataObject.name} /></label></div>
                <div><label><span className="studentDataSpan">Father Name:  </span>
                    <input name="fName"  onChange={(e)=>this.updateState(e)}
                         defaultValue={this.props.studentDataObject.fName} /></label></div>
                <div><label><span className="studentDataSpan">Dues left:    </span>
                    <input name="dues" onChange={(e)=>this.updateState(e)} defaultValue={this.props.studentDataObject.duesLeft} /></label></div>
                <div><label><span className="studentDataSpan">Class Teacher:</span>
                    <input name="teacher" onchange={(e)=>this.updateState(e)}
                     defaultValue={this.props.studentDataObject.classTeacher} /></label></div>
                <div><label><span className="studentDataSpan">Monthly Attendance:</span>
                    <input name="attendance" onChange={(e)=>this.updateState(e)}
                     defaultValue={this.props.studentDataObject.monthlyAttendance} /></label></div>
                <div><label><span className="studentDataSpan">Test record:</span>
                    <input name="testRecord" onChange={(e)=>this.updateState(e)}
                     defaultValue={this.props.studentDataObject.testRecord} /></label></div>
                <div><label><span className="studentDataSpan">Overall Status:</span>
                    <input name="status" onChange={(e)=>this.updateState(e)}
                     defaultValue={this.props.studentDataObject.overallStatus} /></label></div>
                <Button color="warning" onClick={()=>this.props.updateStudentRecordFunc(this.state)} >Apply Changes</Button>
            </>
        )
    }
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{
                this.props.complains.map((obj) => {
                    return <div className="p-3 bg-primary my-2 rounded">
                        <Toast>
                            <ToastHeader>
                                {obj.name}<br />{obj.fatherName}<br />{obj.applNo}<br />{obj.applemail}<br />{obj.applRel}
                            </ToastHeader>
                            <ToastBody>
                                {obj.query}
                            </ToastBody>
                        </Toast>
                    </div>
                }
                )
            }

            </div>
        )
    }
}

export default LoggedIn;