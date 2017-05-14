import React, {Component} from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick()
    }

    render() {
        let {id, item} = this.props
        return(
            <tr onClick={this.handleClick} data-toggle="modal" data-target="#myModal">
                <td>{id + 1}</td>
                <td>{item.action}</td>  
                <td>{item.done ? 'Yes' : 'No'}</td>  
            </tr>
        )
    }
}

export default TodoItem