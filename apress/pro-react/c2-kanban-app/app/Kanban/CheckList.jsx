import React, {Component, PropTypes} from 'react'

class CheckList extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        let input = this.refs.newTask;
        let inputValue = input.value;
        let inputRect = input.getBoundingClientRect();
        console.log(input, inputValue, inputRect)
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
                    <input type="text" onChange={this.handleChange} className="form-control" placeholder="Type then hit Enter to add a task" ref="newTask" />
                </div>
            </div>
        )
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default CheckList