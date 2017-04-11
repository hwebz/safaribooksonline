import React from 'react'

export default class AddProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            bio: '',
            hobby: ''
        }
        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleHobby = this.handleHobby.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    handleBio(e) {
        this.setState({
            bio: e.target.value
        })
    }

    handleHobby(e) {
        this.setState({
            hobby: e.target.value
        })
    }

    handleClick() {
        let newProfile = {
            name: this.state.name,
            age: this.state.age,
            bio: this.state.bio,
            hobbies: [this.state.hobby]
        }
        this.props.addUserProfile(newProfile);
    }

    render() {
        return(
            <div>
                {/*<p>Add a new profile</p>
                <button onClick={this.props.addUserProfile}>add new profile</button>*/}
                <div>
                    <p>{this.state.name}</p>
                    <p>{this.state.bio}</p>
                    <p>{this.state.hobby}</p>
                </div>
                <input type="text" onChange={this.handleName} value={this.state.name} />
                <input type="text" onChange={this.handleAge} value={this.state.age} />
                <input type="text" onChange={this.handleBio} value={this.state.bio} />
                <input type="text" onChange={this.handleHobby} value={this.state.hobby} />
                <button onClick={this.handleClick}>Add new profile</button>
            </div>
        )
    }
}