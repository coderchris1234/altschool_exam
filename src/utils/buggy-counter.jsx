import React from "react";

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <button className="bg-gray-200 px-10 py-2 rounded-sm " onClick={this.handleClick}> button clicks: {this.state.counter}</button>;
    }
}

export default BuggyCounter;