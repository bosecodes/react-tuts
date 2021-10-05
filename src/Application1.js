/* This file demonstrates how state functions work in react */

import React, {Component} from 'react';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidUpdate(props, state) {
        console.log("Updated from", state, "to", this.state);
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        let name = "Dev";
        let {count} = this.state;


        return (
            <div>
                <h1>Hello {name}</h1>
                <h2>You clicked the button {count} times!</h2>
                <span>
                    <button onClick = {(e) => this.handleClick()}>CLICK ME</button>
                </span>
            </div>
        );
    }
}

export default Application;

/*
We can't return more than one main component, so h1 and p can't be returned together
However the same can be done after wrapping it together in a div

let, const alright
don't use var 

*/
