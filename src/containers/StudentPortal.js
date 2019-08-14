import React from 'react';
import { Button, Table } from 'reactstrap';
import { stat } from 'fs';

class StudentPortal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: "default",
            studentData: { name: "test" }
        }
    }

    routing = (value) => {
        console.log(this.state.studentData)
        this.setState({ view: value});
    }
    setStudentData = (dataObject) => { 
                 this.state.studentData=dataObject
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
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing}/>
                case 3:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing}/>
                case 4:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing}/>
                case 5:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing}/>
                case 6:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing}/>
                case 7:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing}/>
                case 8:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing}/>
                case 9:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing}/>
                case 10:
                    return <StudentsTable tableNumber={this.props.view} setStudentDataProp={this.setStudentData} routing={this.routing}/>
                default:
                    console.log("inavlid value");
            }
        }
        else if (this.state.view == "studentData") {
            // console.log(this.state.studentData);
            return <StudentData StudentObject={this.state.studentData} />
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
            <div>
                {this.state.arr1.map((param, ind) => {
                    return <div ><Button className="studentPortalClassesButton"
                        onClick={() => this.renderStudentsTable(ind + 1)}
                    ><p>class {param}</p></Button></div>
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
                        return <tr className="studentPortalTableCells">
                            <td className="studentPortalTableCells">
                                {index + 1}
                            </td>
                            <td className="studentPortalTableCells">
                                <a onClick={() => this.CallerFunction(obj, "studentData")}
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
    }
    render() {
        return (
            <div>
                <div><label>Name: {this.props.StudentObject.name}</label></div>
                <div><label>Father Name: {this.props.StudentObject.fName}</label></div>
            </div>
        )
    }
}
export default StudentPortal;