import React from 'react';
import {
    Button, Toast, ToastBody, ToastHeader, Card, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import DropDownLoggedInPage from "../components/loggedInPage/dropDown"
import firebase from "firebase";

class LoggedIn extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                view: "default",
                studentDataObject: "",
                indexkey: "0",
                todos: false,
                diary: false,
                formsBtn: false
            }
        }
    }
    routing = (param, studentData = "", key = "0") => {
        this.setState(
            {
                view: param,
                studentDataObject: studentData,
                indexkey: key

            }
        )
    }

    renderFunction = () => {
        if (this.state.view == "default") {
            return <LoggedInPageDefaultView routing={this.routing} />
        }
        else if (this.state.view == "todos") {

            return <Dashboard deleteComplainFunc={this.props.deleteComplainFunc} complains={this.props.complains} routing={this.routing} />
        }
        else if (this.state.view == "studentsTable") {
            return <LoggedInPageStudentsTable studentsRecord={this.props.studentsRecord}
                deleteStudentFunc={this.props.deleteStudentFunc}
                routing={this.routing} />
        }
        else if (this.state.view == "studentData") {

            return <LoggedInPageStudentData studentDataObject={this.state.studentDataObject} updateStudentRecordFunc={this.props.updateStudentRecordFunc} keyValue={this.state.indexkey} />
        }
        else if (this.state.view == "addNewStudent") {
            return <AddStudent updateStudentRecordFunc={this.props.updateStudentRecordFunc} />
        }
        else if (this.state.view == "diary") {
            return <Diary diary={this.props.diary} updateDiary={this.props.updateDiary} />
        }
        else if (this.state.view == "formData") {
            return <FormData forms={this.props.forms} deleteForm={this.props.deleteForm} />
        }

    }
    setTodosButton = () => {
        if (this.state.todos == false) {
            this.routing("todos");

            this.state.todos = true;
            this.state.formsBtn = false;
            this.state.diary = false;
        }
        else {
            this.routing("default");

            this.state.todos = false;
        }
    }
    setDiaryButton = () => {
        if (this.state.diary == false) {
            this.routing("diary");

            this.state.diary = true;
            this.state.formsBtn = false;
            this.state.todos = false;
        }
        else {
            this.routing("default");

            this.state.diary = false;
        }
    }
    setFormsButton = () => {
        if (this.state.formsBtn == false) {
            this.routing("formData");

            this.state.formsBtn = true;
            this.state.todos = false;
            this.state.diary = false;
        }
        else {
            this.routing("default");

            this.state.formsBtn = false;
        }

    }
    changePassword = () => {
        let passwordTemp = prompt("Enter new passwrod");
        let passwordFinal = prompt("Confirm new passwrod");
        if (passwordTemp == "" || passwordFinal == ""||passwordTemp != passwordFinal) {
            alert("Unable to change password please try again")
        }
        else if (passwordTemp == passwordFinal) {
            firebase.auth().currentUser.updatePassword(passwordFinal).then(() => {
                alert("Succesfully changed password");
            }).catch((err) => {
                alert(err);
            })
        }
    }
    render() {
        console.log(this.props.forms)
        return (
            <>
                <div className="logoutButtonDiv">
                    <div id="navigationButtons" style={{ margin: "0", padding: "0" }}>
                        <Button style={{ position: "absolute", left: "1px", width: "120px", height: "100%" }} color="primary" onClick={() => this.setTodosButton()}>
                            {(this.state.todos === false) ? "Todos" : "Dashboard"}
                        </Button>
                        <Button style={{ position: "absolute", left: "125px", width: "120px", height: "100%" }} onClick={() => this.setDiaryButton()}
                        >{(this.state.diary === false) ? "UpdateDiary" : "Dashboard"}</Button>

                        <Button color="warning" onClick={() => this.setFormsButton()}
                            style={{ position: "absolute", left: "247px", width: "120px", height: "100%" }}>
                            {(this.state.formsBtn === false) ? "Forms" : "Dashboard"}</Button>

                        <Button color="info" onClick={() => this.changePassword()}
                            style={{ position: "absolute", left: "369px", width: "150px", height: "100%" }}>
                            Reset Password?</Button>
                    </div>

                    <span id="dropDownLoggedInPage"> <DropDownLoggedInPage setTodos={this.setTodosButton} setDiary={this.setDiaryButton} setForms={this.setFormsButton}
                        todos={this.state.todos} diary={this.state.diary} formsBtn={this.state.formsBtn} /></span>

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
        this.state = {}
    }

    modal = (ind) => ({

    })

    render() {
        return (
            <div id="studentPortalTableDiv">
                <Button style={{ width: "70%", fontSize: "120%" }} onClick={() => this.props.routing("addNewStudent")}>Add Student</Button>
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
                                    onClick={() => this.props.routing("studentData", obj, index)}
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
                name: this.props.studentDataObject.name, fName: this.props.studentDataObject.fName, dues: this.props.studentDataObject.duesLeft,
                 teacher: this.props.studentDataObject.classTeacher, attendance: this.props.studentDataObject.monthlyAttendance, 
                 testRecord: this.props.studentDataObject.testRecord, status: this.props.studentDataObject.overallStatus
                 , english: this.props.studentDataObject.english
                 , urdu: this.props.studentDataObject.urdu
                 , islamiat: this.props.studentDataObject.islamiat
                 , pst: this.props.studentDataObject.pst
                 , computer: this.props.studentDataObject.computer
                 , science: this.props.studentDataObject.science
                 , maths: this.props.studentDataObject.maths
            }
        }
    }


    updateState = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    render() {

        return (
            <>
                <div><label><span className="studentDataSpan">Name:</span>
                    <input name="name" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.name} /></label></div>
                <div><label><span className="studentDataSpan">Father Name:  </span>
                    <input name="fName" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.fName} /></label></div>
                <div><label><span className="studentDataSpan">Dues left:    </span>
                    <input name="dues" onChange={(e) => this.updateState(e)} defaultValue={this.props.studentDataObject.duesLeft} /></label></div>
                <div><label><span className="studentDataSpan">Class Teacher:</span>
                    <input name="teacher" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.classTeacher} /></label></div>
                <div><label><span className="studentDataSpan">Monthly Attendance:</span>
                    <input name="attendance" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.monthlyAttendance} /></label></div>
                <div><label><span className="studentDataSpan">Test record:</span>
                    <input name="testRecord" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.testRecord} /></label></div>
                        
                <div><label><span className="studentDataSpan">Overall Status:</span>
                    <input name="status" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.overallStatus} /></label></div>
                        
                <div><label><span className="studentDataSpan">English:</span>
                    <input name="english" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.english} /></label></div>
                        
                <div><label><span className="studentDataSpan">Urdu:</span>
                    <input name="urdu" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.urdu} /></label></div>
                        
                <div><label><span className="studentDataSpan">Islamiat:</span>
                    <input name="islamiat" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.islamiat} /></label></div>
                        
                <div><label><span className="studentDataSpan">Pakistan St.:</span>
                    <input name="pst" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.pst} /></label></div>
                        
                <div><label><span className="studentDataSpan">Science:</span>
                    <input name="science" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.science} /></label></div>
                        
                <div><label><span className="studentDataSpan">Computer:</span>
                    <input name="computer" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.computer} /></label></div>
                        
                <div><label><span className="studentDataSpan">Maths:</span>
                    <input name="maths" onChange={(e) => this.updateState(e)}
                        defaultValue={this.props.studentDataObject.maths} /></label></div>

                <Button color="warning" onClick={() => this.props.updateStudentRecordFunc(this.state, this.props.keyValue)} >Apply Changes</Button>
            </>
        )
    }
}

class AddStudent extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                name: "", fName: "", dues: "", teacher: "", attendance: "", testRecord: "", status: "",english:"",urdu:"",
                islamiat:"",pst:"",computer:"",science:"",maths:""
            }
        }
    }
    updateState = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    render() {
        return (
            <form>
                <div><label><span className="studentDataSpan">Name:</span>
                    <input name="name" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>
                <div><label><span className="studentDataSpan">Father Name:  </span>
                    <input name="fName" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>
                <div><label><span className="studentDataSpan">Dues left:    </span>
                    <input name="dues" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>
                <div><label><span className="studentDataSpan">Class Teacher:</span>
                    <input name="teacher" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>
                <div><label><span className="studentDataSpan">Monthly Attendance:</span>
                    <input name="attendance" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>
                <div><label><span className="studentDataSpan">Test record:</span>
                    <input name="testRecord" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>

                <div><label><span className="studentDataSpan">Overall Status:</span>
                    <input name="status" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>

                <div><label><span className="studentDataSpan">English:</span>
                    <input name="english" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>

                <div><label><span className="studentDataSpan">Urdu:</span>
                    <input name="urdu" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>

                <div><label><span className="studentDataSpan">Islamiat:</span>
                    <input name="islamiat" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>

                <div><label><span className="studentDataSpan">Pakistan St.:</span>
                    <input name="pst" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>

                <div><label><span className="studentDataSpan">Science:</span>
                    <input name="science" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>

                <div><label><span className="studentDataSpan">Computer:</span>
                    <input name="computer" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>

                <div><label><span className="studentDataSpan">Maths:</span>
                    <input name="maths" onChange={(e) => this.updateState(e)} type="text"
                        required /></label></div>
                <Button type="submit" color="warning" onClick={() => this.props.updateStudentRecordFunc(this.state)} >Apply Changes</Button>
            </form>
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
                this.props.complains.map((obj, index) => {
                    return <div className="p-3 bg-primary my-2 rounded">
                        <Toast>
                            <div id="toastHeader">
                                <div><Button style={{ border: "hidden", backgroundColor: "inherit", color: "black" }}
                                    onClick={() => this.props.deleteComplainFunc(index)}>x</Button></div>
                                {obj.name}<br />{obj.fatherName}<br />{obj.applNo}<br />{obj.applemail}<br />{obj.applRel}
                            </div>
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
class Diary extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                route: "default",
                diaryData: "",
                key: ""
            }
        }
    }
    diaryComponentRouting = (param, obj, ind) => {

        this.setState({
            route: param,
            diaryData: obj,
            key: ind
        })
    }

    render() {
        return (
            <div>
                {
                    (this.state.route == "default") ? <DiaryComponentDefaultView diary={this.props.diary} diaryComponentRouting={this.diaryComponentRouting} />
                        : <DiaryData diaryData={this.state.diaryData} keyProp={this.state.key} updateDiary={this.props.updateDiary} />
                }
            </div>
        )
    }
}
class DiaryComponentDefaultView extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="studentPortalDefaultView">
                {
                    this.props.diary.map((obj, ind) => {
                        return <div >
                            <Button className="studentPortalClassesButton"
                                onClick={() => this.props.diaryComponentRouting("diaryData", obj, ind)}>
                                <p>Diary Class {ind + 1}</p>
                            </Button>
                        </div>
                    })
                }
            </div>
        )
    }
}
class DiaryData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            english: this.props.diaryData.english,
            urdu: this.props.diaryData.urdu,
            islamiat: this.props.diaryData.islamiat,
            pst: this.props.diaryData.pst,
            science: this.props.diaryData.science,
            computer: this.props.diaryData.computer,
            maths: this.props.diaryData.maths

        }
    }
    updatestate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    update = () => {

        this.props.updateDiary(this.props.keyProp, this.state)
    }
    render() {
        return (
            <div style={{ minHeight: "100vh" }}>
                {console.log(this.props.diaryData)}
                <span>English</span><div><textarea rows="2" className="adminDairyComponentTextArea" defaultValue={this.props.diaryData.english}
                    onChange={(e) => this.updatestate(e)} name="english" /></div>
                <span>Urdu</span><div><textarea rows="2" className="adminDairyComponentTextArea" defaultValue={this.props.diaryData.urdu}
                    onChange={(e) => this.updatestate(e)} name="urdu" /></div>
                <span>Islamiat</span><div><textarea rows="2" className="adminDairyComponentTextArea" defaultValue={this.props.diaryData.islamiat}
                    onChange={(e) => this.updatestate(e)} name="islamiat" /></div>
                <span>Pakistan St.</span><div><textarea rows="2" className="adminDairyComponentTextArea" defaultValue={this.props.diaryData.pst}
                    onChange={(e) => this.updatestate(e)} name="pst" /></div>
                <span>Science</span><div><textarea rows="2" className="adminDairyComponentTextArea" defaultValue={this.props.diaryData.science}
                    onChange={(e) => this.updatestate(e)} name="science" /></div>
                <span>Computer</span><div><textarea rows="2" className="adminDairyComponentTextArea" defaultValue={this.props.diaryData.computer}
                    onChange={(e) => this.updatestate(e)} name="computer" /></div>
                <span>Maths</span><div><textarea rows="2" className="adminDairyComponentTextArea" defaultValue={this.props.diaryData.maths}
                    onChange={(e) => this.updatestate(e)} name="maths" /></div>
                <div><Button color="warning" onClick={() => this.update()}>Update Diary</Button></div>
            </div>
        )
    }
}
class FormData extends React.Component {
    constructor(props) {
        super(props)
        {

        }
    }

    render() {
        return (
            <>
                {
                    this.props.forms.map((obj, ind) => {
                        return <div>
                            <Card>
                                <CardBody>
                                    <CardTitle>{obj.studentName}</CardTitle>
                                    <CardSubtitle>{obj.fName}</CardSubtitle>
                                    <CardText>Admission required in class {obj.admissionClass}</CardText>
                                    <Button onClick={() => this.props.deleteForm(ind)} >Delete</Button>
                                </CardBody>
                            </Card>
                        </div>
                    })
                }
            </>
        )
    }
}
export default LoggedIn;