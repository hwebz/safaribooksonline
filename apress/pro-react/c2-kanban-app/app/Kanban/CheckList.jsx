import React, {Component} from 'react'

class CheckList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {cardId, tasks} = this.props
        let tasksList = tasks.map((task, index) => (
            <div key={index} className="funkyradio">
                <div className="funkyradio-success">
                    <input type="checkbox" name="radio" defaultChecked={task.done} />
                    <label>{task.name}</label>
                    <a className="checklist__task--remove close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </a>
                </div>
            </div>
        ))
        return(
            <div className="checklist">
                <ul className="checklist__task">
                    {tasksList}
                </ul>
                <div className="checklist--add-task">
                    <input type="text" className="form-control" placeholder="Type then hit Enter to add a task"/>
                </div>
            </div>
        )
    }
}

export default CheckList