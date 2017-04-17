import React, {Component} from 'react'
import CheckList from "./CheckList.jsx"
import marked from 'marked'

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

export default Card