import React from 'react'

import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx';

import {getProfiles} from '../utils/profileApi';

var MyComponent = props => {
    return(
        <div>
            <p>I am a functional component</p>
            <p>{props.hello}</p>
        </div>
    )
}

// ES6
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // profiles: [
            //     {name: 'Sue', age: 30, bio: 'enjoys swimming and biking', hobbies: ['swimming', 'biking']},
            //     {name: 'Joe', age: 40, bio: 'enjoys long walks on the beach', hobbies: ['gardening', 'games']}
            // ]
            profiles: []
        }
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        // console.log('data loading...');
        // fetch('http://localhost:3000/profiles')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({
        //             profiles: [
        //                 ...data
        //             ]
        //         })
        //         console.log('data loaded');
        //     })
        //     .catch(err => console.log(err));

        console.log('data loading...');
        getProfiles().then(data => {
            this.setState({
                profiles: data
            });
            console.log('data loaded');
        });
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
        console.log('app rendered');
        let profiles = this.state.profiles.map((profile, i) => {
            return(
                <Profile key={i} person={profile} /> // key for rendering performance
            );
        });
        return (
            <div>
                {profiles}
                {/*<button onClick={this.addUser.bind(this)}>Add new User</button>*/}
                <AddProfile addUserProfile={this.addUser} />
                <MyComponent hello="John" />
            </div>
        )
    }
};

export default App;