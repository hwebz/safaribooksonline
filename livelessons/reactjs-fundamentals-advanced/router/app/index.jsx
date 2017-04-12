import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, hashHistory, IndexRoute} from 'react-router'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import App from './pages/App.jsx'

// Simple router example (not using react-router)
/*class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <p>Welcome to the Home page</p>
            </div>
        )
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <p>About page</p>
            </div>
        )
    }
}

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <button onClick={this.props.gotoHome}>Goto Home</button>
                <button onClick={this.props.gotoAbout}>Goto About</button>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: <Home />
        }
        this.gotoAbout = this.gotoAbout.bind(this);
        this.gotoHome = this.gotoHome.bind(this);
    }

    gotoAbout() {
        this.setState({
            view: <About />
        })
    }

    gotoHome() {
        this.setState({
            view: <Home />
        })
    }

    render() {
        return(
            <div>
                <Nav gotoAbout={this.gotoAbout} gotoHome={this.gotoHome} />
                {this.state.view}
            </div>
        )
    }
}*/

class Outer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>Some information</h3>
                {this.props.children}
                <p>Some text content</p>
            </div>
        )
    }
}

/*ReactDOM.render(
    (<Outer>
        <div>
            <p>Other content</p>    
        </div>    
    </Outer>), 
    document.getElementById('app'));*/

ReactDOM.render(
    (<Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
        </Route>
    </Router>), 
    document.getElementById('app'));