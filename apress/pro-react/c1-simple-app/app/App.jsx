import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import TodoList from './Todo/TodoList.jsx'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Todo List",
            items: [
                {action: "Learn HTML", done: true},
                {action: "Learn CSS", done: true},
                {action: "Learn JavaScript", done: true},
                {action: "Learn React", done: false},
                {action: "Learn Angular", done: false}
            ]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let newName = this.refs.item.value;

        this.setState({
            items: [
                ...this.state.items,
                {action: newName, done: false}
            ]
        })
    }

    render() {
        return(
            <div className="container">
                <h3 className="bg-primary p-a-1">{this.state.title}</h3>
                <div className="m-t-1 m-b-1">
                    <input type="text" ref="item" className="form-control" placeholder="Enter todo action"/>
                    <button className="btn btn-primary m-t-1" onClick={this.handleClick}>Add</button>
                </div>
                <TodoList items={this.state.items} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))