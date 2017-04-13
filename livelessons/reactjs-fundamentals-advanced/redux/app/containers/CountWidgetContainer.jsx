import React, {Component} from 'react'

import { incrementCount } from '../actions/actions'
import CountWidget from '../components/CountWidget.jsx'

export default class CountWidgetContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.store.getState()
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange)
    }

    handleChange() {
        this.setState({
            count: this.props.store.getState()
        })
    }

    handleClick() {
        let action = incrementCount()
        this.props.store.dispatch(incrementCount());
    }
    
    render() {
        return <CountWidget count={this.state.count} handleClick={this.handleClick} />
    }
}