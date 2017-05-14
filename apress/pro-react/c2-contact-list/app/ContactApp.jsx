import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

import SearchBar from './SearchBar.jsx'
import ContactList from './ContactList.jsx'

// Main (stateful) component.
// Renders a SearchBar and a ContactList
// Passes down filterText state and handleUserInput callback props
class ContactApp extends Component {
    constructor() {
        super()
        this.state = {
            filterText: ''
        }
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    handleUserInput(searchTerm) {
        this.setState({
            filterText: searchTerm
        })
    }

    render() {
        return(
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
                <ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
            </div>
        )
    }
}

ContactApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactApp