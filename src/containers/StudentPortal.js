import React from 'react';
import { Button, Table } from 'reactstrap';
// import { stat } from 'fs';
import { Progress } from 'reactstrap';
import { Collapse, CardBody, Card } from 'reactstrap';
import firebase from "firebase"
class StudentPortal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: "default",
            studentData: { name: "test" }
        }
    }

    routing = (value) => {
        // console.log(this.state.studentData)
        this.setState({ view: value });
    }
    setStudentData = (dataObject) => {
        this.state.studentData = dataObject
    }

    renderFunction = () => {
        if (this.state.view == "default") {
            return <StudentPortalDefaulView routing={this.routing} />
        }
        else if (this.state.view > 0 && this.state.view <= 10) {
            switch (this.state.view) {
                case 1:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                case 2:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                case 3:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                case 4:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                case 5:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                case 6:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                case 7:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                case 8:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                case 9:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                case 10:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing} />
                default:
                    console.log("inavlid value");
            }
        }
        else if (this.state.view == "studentData"){
            // console.log(this.state.studentData);
            return <StudentData StudentObject={this.state.studentData} updateComplainsFunc={this.props.updateComplainsFunc} />
        }
    }
    render() {
        return (
            <div className="studentPortalDiv">
                {this.renderFunction()}
            </div>
        )
    }
}



class StudentPortalDefaulView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            //  name: "1"
        }
    }
    renderStudentsTable = (index) => {
        this.props.routing(index);
    }

    render() {
        return (
            <div className="studentPortalDefaultView">
                {this.state.arr1.map((param, ind) => {
                    return <div ><Button className="studentPortalClassesButton"
                        onClick={() => this.renderStudentsTable(ind + 1)}
                    ><p style={{ textAlign: "center" }}>Class {param}</p></Button></div>

                }
                )}
            </div>
        )
    }
}

class StudentsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    CallerFunction = (renderFunctionParam, routingFunctionParam) => {
        // console.log(renderFunctionParam);
        this.props.setStudentDataProp(renderFunctionParam)
        this.props.routing(routingFunctionParam);
        // this.props.renderFunction(renderFunctionParam);
    }
    render() {
        return (
            <div id="studentPortalTableDiv">
                <Table id="studentPortalTable">
                    <tr>
                        <th className="studentPortalTableCells">S.No.</th>
                        <th className="studentPortalTableCells">Name Of Student</th>
                        <th className="studentPortalTableCells">Father Name</th>

                    </tr>
                    {this.props.tableNumber.map((obj, index) => {
                        return <tr onClick={() => this.CallerFunction(obj, "studentData")}
                            className="studentPortalTableCells">
                            <td className="studentPortalTableCells">
                                {index + 1}
                            </td>
                            <td className="studentPortalTableCells">
                                <a
                                > {obj.name}</a>
                            </td>
                            <td className="studentPortalTableCells">
                                {obj.fName}
                            </td>
                        </tr>
                    }
                    )
                    }
                </Table>
            </div>
        )
    }
}
class StudentData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    calculateAverage = () => {
        let avr = (this.props.StudentObject.english + this.props.StudentObject.urdu + this.props.StudentObject.islamiat +
            this.props.StudentObject.pst + this.props.StudentObject.maths + this.props.StudentObject.science +
            this.props.StudentObject.computer) / 7
        return avr;
    }


    render() {
        return (
            <div id="studentDataParentDiv">
                <div className="studentdataDiv"><label>Name: {this.props.StudentObject.name}</label></div>
                <div className="studentdataDiv"><label>Father Name: {this.props.StudentObject.fName}</label></div>
                <div className="studentdataDiv"><label>Dues left: {this.props.StudentObject.duesLeft}</label></div>
                <div className="studentdataDiv"><label>Class Teacher: {this.props.StudentObject.classTeacher}</label></div>
                <div className="studentdataDiv"><label>Monthly Attendance: {this.props.StudentObject.monthlyAttendance}</label></div>
                <div className="studentdataDiv"><label>Test Record: {this.calculateAverage() >= 75 ? "Good" : this.calculateAverage() >= 65 ? "average" : "bad"}
                </label></div>

                <fieldset style={{ border: "1px solid rgba(0, 89, 255, 0.767)", display: "inline-block", width: "98%", margin: "1%" }}>
                    <legend>
                        Subject wise student progress out of 100%
                        </legend>
                    <div style={{ width: "98%", display: "inline-block", margin: "1%" }}>
                        <div className="text-center">
                            English:{this.props.StudentObject.english}%
                        </div>
                        <Progress color={this.props.StudentObject.english >= 75 ? "success" : this.props.StudentObject.english >= 65 ? "warning" : "danger"}
                            value={this.props.StudentObject.english}
                        />

                        <div className="text-center">
                            Urdu:{this.props.StudentObject.urdu}%
                        </div>
                        <Progress color={this.props.StudentObject.urdu >= 75 ? "success" : this.props.StudentObject.urdu >= 65 ? "warning" : "danger"}
                            value={this.props.StudentObject.urdu} />

                        <div className="text-center">
                            Islamiat:{this.props.StudentObject.islamiat}%
                        </div>
                        <Progress color={this.props.StudentObject.islamiat >= 75 ? "success" : this.props.StudentObject.islamiat >= 65 ? "warning" : "danger"}
                            value={this.props.StudentObject.islamiat} />

                        <div className="text-center">
                            Pakistan studies:{this.props.StudentObject.pst}%
                        </div>
                        <Progress color={this.props.StudentObject.pst >= 75 ? "success" : this.props.StudentObject.pst >= 65 ? "warning" : "danger"}
                            value={this.props.StudentObject.pst} />

                        <div className="text-center">
                            Maths:{this.props.StudentObject.maths}%
                        </div>
                        <Progress color={this.props.StudentObject.maths >= 75 ? "success" : this.props.StudentObject.maths >= 65 ? "warning" : "danger"}
                            value={this.props.StudentObject.maths} />

                        <div className="text-center">
                            Science:{this.props.StudentObject.science}%
                        </div>
                        <Progress color={this.props.StudentObject.science >= 75 ? "success" : this.props.StudentObject.science >= 65 ? "warning" : "danger"}
                            value={this.props.StudentObject.science} />

                        <div className="text-center">
                            Computer:{this.props.StudentObject.computer}%
                        </div>
                        <Progress color={this.props.StudentObject.computer >= 75 ? "success" : this.props.StudentObject.computer >= 65 ? "warning" : "danger"}
                            value={this.props.StudentObject.computer} />

                    </div>
                </fieldset>
                <div style={{ textAlign: "center", border: "1px solid rgba(0, 89, 255, 0.767)", margin: "1%", borderRadius: "10px" }}>
                    OverallStatus:<b> {this.calculateAverage() >= 75 ? "success" : this.calculateAverage() >= 65 ? "warning" : "danger"}</b>
                    <Progress
                        color={this.calculateAverage() >= 75 ? "success" : this.calculateAverage() >= 65 ? "warning" : "danger"}
                        style={{ margin: "1%", }} value={this.calculateAverage()} />
                </div>
                <CollapseForm StudentObject={this.props.StudentObject} updateComplainsFunc={this.props.updateComplainsFunc} />
            </div>
        )
    }
}

class CollapseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            name: this.props.StudentObject.name,
            fname: this.props.StudentObject.fName,
            applnum: "",
            applemail: "",
            applrel: "",
            query: ""

        }
    }




    setEvent = (keyparam, valueparam) => {
        switch (keyparam) {
            case "applnum":
                this.setState(
                    {
                        applnum: valueparam
                    }
                )
                break;
            case "applemail":
                this.setState(
                    {
                        applemail: valueparam
                    }
                )
                break;

            case "query":
                this.setState(
                    {
                        keyparam: valueparam
                    }
                )
                break;
            case "rel":
                this.setState(
                    {
                        applrel: valueparam
                    }
                )
                break;
        }
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    getValues = () => {


    }
    fbAuthentication = (obj) => {
       let base_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(base_provider).then((res) => {
            this.props.updateComplainsFunc(obj)
        }).catch((err) => {
            alert(err,"error");
        })
    }
    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Any thing Wrong?</Button>

                <Collapse isOpen={this.state.collapse} id="studentPortalStudentDataQueryForm">
                    <scetion
                        style={{
                            display: "inline-block", textAlign: "left", width: "96%", margin: "2%"
                        }}>

                        <form>
                            <label className="studentPortalStudentDataQueryFormLabel">
                                <span>Name:</span><input type="text" name="name"
                                    value={this.props.StudentObject.name} disabled /></label>

                            <label className="studentPortalStudentDataQueryFormLabel">
                                <span>Father Name:</span><input type="text" name="fName"
                                    value={this.props.StudentObject.fName} disabled /></label>

                            <label className="studentPortalStudentDataQueryFormLabel"
                                onChange={(e) => this.setEvent("applnum", e.target.value)}>
                                <span>Applicant's contact #:</span><input type="number"
                                    min="03000000000" max="03999999999" required /></label>

                            <label className="studentPortalStudentDataQueryFormLabel"
                                onChange={(e) => this.setEvent("applemail", e.target.value)}>
                                <span>Applicant's Email:</span><input type="email"
                                    required /></label>
                            <label className="studentPortalStudentDataQueryFormLabel" >
                                <span>Applicant's relation with student:</span><br />
                                <span >Father</span>  <input type="radio" name="radio" required value="father"
                                    onClick={(e) => this.setEvent("applemail", e.target.name)} /><br />
                                <span>Mother </span> <input type="radio" name="radio" required value="mother"
                                    onClick={(e) => this.setEvent("applemail", e.target.name)} /><br />
                                <span>Guardian </span> <input type="radio" name="radio" required value="guardian"
                                    onClick={(e) => this.setEvent("applemail", e.target.name)} /><br />
                            </label>
                            <label className="studentPortalStudentDataQueryFormLabel">
                                <textarea placeholder="Type your query here:"
                                    onChange={(e) => this.setEvent("applemail", e.target.value)}
                                    style={{ opacity: "0.8", display: "block", width: "98%", margin: "1%" }} required /></label>

                            <div style={{ textAlign: "center" }}><Button type="submit" onClick={() => this.fbAuthentication(this.state)}
                                style={{ width: "50%" }}>submit</Button></div>
                        </form>
                    </scetion>
                </Collapse>
            </div>
        )
    }
}

export default StudentPortal;