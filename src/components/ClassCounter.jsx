import React from "react";

class ClassCounter extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)

    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    decrement() {
        this.setState({ count: this.state.count - 1 })
    }



    render() {
        return (
            <>
                <h4>{this.state.count}</h4>
                <button onClick={this.increment}>Up</button>
                <button onClick={this.decrement}>Down</button>
            </>
        )
    }
}

export default ClassCounter