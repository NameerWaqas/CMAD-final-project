import React from 'react';
import { Button } from 'reactstrap';

class LoggedIn extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <h2>
                    Coming Soon...
            </h2>
                <Button onClick={()=>this.props.prop("loggedOut")}>
                    Logout
            </Button>
            </div>
        )
    }
}
export default LoggedIn;