import React from "react";
import { readSync } from "fs";
import { Table } from "reactstrap"
export default class Diary extends React.Component {
    constructor(props) {
        super(props)
        {

        }
    }

    render() {
        return (
            <div id="diaryComponentDiv">
                {
                    this.props.diary.map((obj, ind) => {
                        return <Table border="1" >
                            <tr style={{backgroundColor:"Grey"}}>
                                <th colSpan="2">Class {ind + 1}</th>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:"lightGrey"}}>Subject</td>
                                <td style={{backgroundColor:"rgb(240, 240, 240)"}}>Homework</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:"lightGrey"}}>English</td>
                                <td>{obj.english}</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:"lightGrey"}}>Urdu</td>
                                <td>{obj.urdu}</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:"lightGrey"}}>Islamiat</td>
                                <td>{obj.islamiat}</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:"lightGrey"}}>Pakistan St.</td>
                                <td>{obj.pst}</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:"lightGrey"}}>Science</td>
                                <td>{obj.science}</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:"lightGrey"}}>Computer</td>
                                <td>{obj.computer}</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:"lightGrey"}}>Maths</td>
                                <td>{obj.maths}</td>
                            </tr>
                        </Table>
                    }
                    )
                }

            </div>
        )
    }
}
