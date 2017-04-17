import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return(
            <div className="container">
                <h3 className="bg-primary p-a-1">Todo List</h3>
                <div className="m-t-1 m-b-1">
                    <input type="text" placeholder="Enter todo action..." className="form-control" />
                    <button className="btn btn-primary m-t-1">Add</button>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Learn HTML</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))