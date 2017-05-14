import React from 'react'
import ReactDOM from 'react-dom'

/*class App extends React.Component {
    componentWillMount() {
        console.log('in componentWillMount');
    }

    componentDidMount() {
        // console.log('in componentDidMount');
        setInterval(this.periodic, 500);
    }

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.periodic = this.periodic.bind(this);
    }

    periodic() {
        this.setState({
            count: this.state.count + 1
        })
    }

    stateChange() {
        this.setState({
            count: 1
        })
    }

    componentWillUnmount() {
        clearInterval(this.periodic);
    }

    render() {
        console.log('in render');
        return(
            <div>
                <p>Hello world</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.stateChange.bind(this)}>Change</button>
            </div>
        )
    }
}*/

/*class MyComponent extends React.Component {
    render() {
        return(
            <div>
                <h1>My Component</h1>
                <p>{this.props.children}</p>
                <p>More content</p>
            </div>
        )
    }
}

class AnotherComponent extends React.Component {
    render() {
        return(
            <p>Another content from Another Component</p>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <p>Hello world</p>
                {//<MyComponent>Arbitary content</MyComponent>}
                <MyComponent>
                    <AnotherComponent />
                    <AnotherComponent />
                </MyComponent>
            </div>
        )
    }
}*/

/*let HOCGen = (Component, state) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = state
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 500)
    }

    render() {
        return <Component {...this.props} {...this.state} />
    }
}

class Comp1 extends React.Component {
    render() {
        return(
            <div>
                <p>Comp 1</p>
                <p>{this.props.count}</p>
            </div>
        )
    }
}

class Comp2 extends React.Component {
    render() {
        return(
            <div>
                <p>Comp 2</p>
                <p>{this.props.count}</p>
            </div>
        )
    }
}

let WrappedComp1 = HOCGen(Comp1, {count: 0});
let WrappedComp2 = HOCGen(Comp2, {count: 100});

class App extends React.Component {
    render() {
        return(
            <div>
                <WrappedComp1 />
                <WrappedComp2 />
            </div>
        )
    }
}*/

/*class MyComponent extends React.Component {
    render() {
        return(
            <div>
                <p>Name: {this.props.name}</p>
                <p>Count: {this.props.count}</p>
            </div>
        )
    }
}

MyComponent.propTypes = {
    name: React.PropTypes.string,
    count: React.PropTypes.number.isRequired
}

MyComponent.defaultProps = {
    name: 'Micheal'
}

class App extends React.Component {
    render() {
        return(
            <div>
                <MyComponent count={10} />
            </div>
        )
    }
}*/



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handler = this.handler.bind(this);
        this.submit = this.submit.bind(this);
    }

    handler(e) {
        this.setState({
            input: e.target.value
        })
    }

    submit(e) {
        this.setState({
            input: ''
        }, () => {
            ReactDOM.findDOMNode(this.refs.inputBox).focus()
        })
    }

    render() {
        return(
            <div>
                <p>{this.state.input}</p>
                <input type="text" ref="inputBox" value={this.state.input} onChange={this.handler} />
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));