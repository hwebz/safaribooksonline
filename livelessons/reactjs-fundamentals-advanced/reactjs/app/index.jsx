import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App.jsx';

// ES5
/*var Y = React.createClass({
    render: function() {
        return(
            React.createElement('div', {}, 
                [
                    React.createElement('h1', {}, 'Welcome to my site'),
                    React.createElement('p', {}, 'some content')
                ]
            )
        )
    }
});

var X = React.createClass({
    render: function() {
        return(
            <p>X</p>
        )
    }
});

var Z = React.createClass({
    getInitialState: function() {
        return {
            profiles: [
                {
                    name: "David"
                },
                {
                    name: "Sarah"
                }
            ]
        }
    },
    render: function() {
        return(
            <section>
                <section>
                    <h3>Profile 1</h3>
                    <p>Name: {this.state.profiles[0].name}</p>
                </section>
                <section>
                    <h3>Profile 2</h3>
                    <p>Name: {this.state.profiles[1].name}</p>
                </section>
            </section>
        )
    }
})

var App = React.createClass({
    render: function() {
        return(
            <div>
                <p>Hello world</p>
                <p>Other stuff</p>
                <X />
                <Y />
                <hr/>
                <Z />
            </div>
        )
    }
});*/

ReactDOM.render(<App />, document.getElementById('app'));