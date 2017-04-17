import React, {Component} from 'react'

class TodoModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {item} = this.props
        return(
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-titl">{item.done ? "DONE" : "DOING"}</h4>
                        </div>
                        <div className="modal-body">
                            <p>{item.action}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoModal