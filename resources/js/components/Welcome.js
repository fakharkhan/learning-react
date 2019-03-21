import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to React</h1>
            </div>
        );
    }
}

export default Welcome;

// We only want to try to render our component on pages that have a div with an ID
// of "welcome"; otherwise, we will see an error in our console
if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'));
}