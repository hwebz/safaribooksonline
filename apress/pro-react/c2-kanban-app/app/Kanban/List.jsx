import React, {Component, PropTypes} from 'react'
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

List.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object)
}

export default List