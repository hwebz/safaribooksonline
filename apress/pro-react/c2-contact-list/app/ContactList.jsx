import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import ContactItem from './ContactItem.jsx'

// Pure component that receives both contacts and filterText props
// The component is responsible for actually filtering the
// contacts before displaying them.
// It's considered a pure component because given the same
// contacts and filterTExt props the output will always be the same.
class ContactList extends Component {
    render() {
        let filteredContacts = this.props.contacts.filter((contact) => contact.name.indexOf(this.props.filterText) !== -1)
        return(
            <ul>
                {filteredContacts.map(
                    (contact, index) => <ContactItem key={index} name={contact.name} email={contact.email} />
                )}
            </ul>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactList