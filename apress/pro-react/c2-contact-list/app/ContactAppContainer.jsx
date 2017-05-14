import React, {Component} from 'react'
import 'whatwg-fetch'

import ContactApp from './ContactApp.jsx'

class ContactAppContainer extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        fetch('./public/contacts.json')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                contacts: responseData
            })
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error)
        })
    }

    render() {
        return(
            <ContactApp contacts={this.state.contacts} />
        )
    }
}

export default ContactAppContainer