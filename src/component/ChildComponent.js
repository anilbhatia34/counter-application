import React, {Component} from "react";

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.callMethod('NEHA')}>Click Me</button>
            </div>
        );
    }
}

export default ChildComponent;