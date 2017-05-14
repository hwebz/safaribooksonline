import React, {Component} from 'react'
import Card from './Card.jsx'

class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let cards = this.props.cards.map((card, index) => (
            <Card key={index} card={card} />
        ))
        return(
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        )
    }
}

export default List