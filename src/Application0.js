import React, {Component} from 'react';

class Application extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let name = "Dev"

        return (
            <div>
                <h1>Hello {name}</h1>
                <span>HDFAKDF</span>
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
