import React from 'react'

import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx';

// ES6
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {name: 'Sue', age: 30, bio: 'enjoys swimming and biking', hobbies: ['swimming', 'biking']},
                {name: 'Joe', age: 40, bio: 'enjoys long walks on the beach', hobbies: ['gardening', 'games']}
            ]
        }
        this.addUser = this.addUser.bind(this);
    }

    /*addUser(e) {
        var user = {
            name: 'Tom',
            age: 44,
            bio: 'enjoys sports',
            hobbies: ['basketball', 'baseball']
        };
        this.setState({
            // profiles: this.state.profiles.concat([user])
            profiles: [
                ...this.state.profiles,
                user
            ]
        })
    }*/

    addUser(newProfile) {
        this.setState({
            profiles: [
                ...this.state.profiles,
                newProfile
            ]
        })
    }

    render() {
        let profiles = this.state.profiles.map((profile, i) => {
            return(
                <Profile key={i} person={profile} />
            );
        });
        return (
            <div>
                {profiles}
                {/*<button onClick={this.addUser.bind(this)}>Add new User</button>*/}
                <AddProfile addUserProfile={this.addUser} />
            </div>
        )
    }
};

export default App;