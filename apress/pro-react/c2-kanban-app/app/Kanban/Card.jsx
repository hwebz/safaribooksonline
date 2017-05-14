import React, {Component, PropTypes} from 'react'
import CheckList from "./CheckList.jsx"
import marked from 'marked'

let titlePropTypes = (props, propName, componentName) => {
    if (props['card'][propName]) {
        let value = props['card'][propName]
        if (typeof value !== 'string' || value.length > 80) {
            return new Error(`${propName} in ${componentName} is longer than 80 characters`)
        }
    }
}

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card: {
                id: 0,
                title: '',
                description: '',
                tasks: []
            },
            showDetails: false
        }
        this.toggleCard = this.toggleCard.bind(this)
    }

    toggleCard() {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    renderDescription(description) {
        return {
            __html: marked(description)
        }
    }

    render() {
        let card = this.props.card ? this.props.card : this.state.card
        let cardDetails = this.state.showDetails ? (
            <div className="card_details">
                {/*<span dangerouslySetInnerHTML={{__html:marked(card.description)}}></span>*/}
                <span dangerouslySetInnerHTML={this.renderDescription(card.description)}></span>
                <CheckList cardId={card.id} tasks={card.tasks} />
            </div>
        ) : (<div></div>)

        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: card.color
        }
        return(
            <div className="card">
                <div style={sideColor} />
                <div className={this.state.showDetails ? "card__title is-open" : "card__title" } onClick={this.toggleCard}>
                    {card.title}
                </div>
                {cardDetails}
            </div>
        )
    }
}

Card.propTypes = {
    id: PropTypes.number,
    title: titlePropTypes,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default Card