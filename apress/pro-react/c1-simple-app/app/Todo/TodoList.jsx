import React, {Component} from 'react'
import TodoItem from './TodoItem.jsx'
import TodoModal from './TodoModal.jsx'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: {
                action: '',
                done: false
            }
        }
    }

    handleClick(item) {
        this.setState({
            selectedItem: item
        })
    }

    render() {
        let listItems = this.props.items.map((item, index) => (
            <TodoItem key={index} handleClick={() => this.handleClick(item)} id={index} item={item} />
        ))
        return(
            <div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Action</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>

                <TodoModal item={this.state.selectedItem} />
            </div>
        )
    }
}

export default TodoList