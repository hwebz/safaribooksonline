import React, {Component} from 'react'

class ComponentLifeCycle extends Component {

    // Mounting: 1st
    constructor() {
        super()
    }

    // Mounting: 2nd
    componentWillMount() {

    }

    // Mounting: 4th
    componentDidMount() {

    }

    // Unmounting: 1st
    componentWillUnmount() {

    }

    // Props Changes: 1st
    componentWillReceiveProps() {

    }

    // Props Changes: 2nd
    // State Changes: 1st
    shouldComponentUpdate() {

    }

    // Props Changes: 3rd
    // State Changes: 2nd
    componentWillUpdate() {

    }

    // Props Changes: 5th
    // State Changes: 4th
    componentDidUpdate() {

    }

    // Mounting: 3rd
    // Props Changes: 4th
    // State Changes: 3rd
    render() {
        return(<h1>Component LifeCycle</h1>)
    }
}

export default ComponentLifeCycle