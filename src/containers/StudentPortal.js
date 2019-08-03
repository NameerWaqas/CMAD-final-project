import React from 'react';
import { Button, Table } from 'reactstrap';

class StudentPortal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: "default",
            class1: [
                {
                    name: "Nameer Waqas"
                },
                {
                    name: "Sabeer Waqas"
                },
                {
                    name: "Faiez Waqas"
                },
                {
                    name: "farzan Waqas"
                },
                {
                    name: "Nameer Waqas"
                },
                {
                    name: "Sabeer Waqas"
                },
                {
                    name: "Faiez Waqas"
                },
                {
                    name: "farzan Waqas"
                }, {
                    name: "Nameer Waqas"
                },
                {
                    name: "Sabeer Waqas"
                },
                {
                    name: "Faiez Waqas"
                },
                {
                    name: "farzan Waqas"
                }, {
                    name: "Nameer Waqas"
                },
                {
                    name: "Sabeer Waqas"
                },
                {
                    name: "Faiez Waqas"
                },
                {
                    name: "farzan Waqas"
                }, {
                    name: "Nameer Waqas"
                },
                {
                    name: "Sabeer Waqas"
                },
                {
                    name: "Faiez Waqas"
                },
                {
                    name: "farzan Waqas"
                }, {
                    name: "Nameer Waqas"
                },
                {
                    name: "Sabeer Waqas"
                },
                {
                    name: "Faiez Waqas"
                },
                {
                    name: "farzan Waqas"
                }, {
                    name: "Nameer Waqas"
                },
                {
                    name: "Sabeer Waqas"
                },
                {
                    name: "Faiez Waqas"
                },
                {
                    name: "farzan Waqas"
                }, {
                    name: "Nameer Waqas"
                },
                {
                    name: "Sabeer Waqas"
                },
                {
                    name: "Faiez Waqas"
                },
                {
                    name: "farzan Waqas"
                }
            ]
        }
    }
    routing = (value) => {
        this.setState({ view: value });
    }
    renderFunction = () => {
        if (this.state.view == "default") {
            return <StudentPortalDefaulView routing={this.routing} />
        }
        else {
            switch (this.state.view) {
                case 1:
                    {
                        return <StudentsTable tableNumber={this.state.class1} />
                        break;
                    }
                case 2:
                    {
                        return <StudentsTable tableNumber={this.state.class1} />
                        break;
                    }
                case 3:
                    {
                        return <StudentsTable tableNumber={this.state.class1} />
                        break;
                    }
                case 4:
                    {
                        return <StudentsTable tableNumber={this.state.view} />
                        break;
                    }
                case 5:
                    {
                        return <StudentsTable tableNumber={this.state.view} />
                        break;
                    }
                case 6:
                    {
                        return <StudentsTable tableNumber={this.state.view} />
                        break;
                    }
                case 7:
                    {
                        return <StudentsTable tableNumber={this.state.view} />
                        break;
                    }
                case 8:
                    {
                        return <StudentsTable tableNumber={this.state.view} />
                        break;
                    }
                case 9:
                    {
                        return <StudentsTable tableNumber={this.state.view} />
                        break;
                    }
                case 10:
                    {
                        return <StudentsTable tableNumber={this.state.view} />
                        break;
                    }
                default:
                    console.log("inavlid value");
            }

            // return <StudentsTable tableNumber={this.state.view} />
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
            arr1: ["1", "2", "3", "4", , "5", "6", "7", "8", "9", "10"],
            name: "1"
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
    render() {
        return (
            <div id="studentPortalTableDiv">
                <Table id="studentPortalTable">
                    <tr>
                        <th className="studentPortalTableCells">S.No.</th>
                        <th className="studentPortalTableCells">Name Of Student</th>
                    </tr>
                    {this.props.tableNumber.map((obj, index) => {
                        return <tr className="studentPortalTableCells">
                            <td className="studentPortalTableCells">
                                {index + 1}
                            </td>
                            <td className="studentPortalTableCells">
                               <a onClick={()=>alert(obj.name)}> {obj.name}</a>
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
export default StudentPortal;