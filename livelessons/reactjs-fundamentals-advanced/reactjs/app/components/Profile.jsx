import React from 'react'

class Profile extends React.Component {
    render() {
        let {person} = this.props;
        let hobbies = person.hobbies.map((hobby, i) => {
            return(<li key={i}>{hobby}</li>);
        })
        return(
            <div>
                <h3>{person.name}</h3>
                <p>{person.bio}</p>
                <h3>Hobbies</h3>
                <ul>
                    {hobbies}
                </ul>
            </div>
        )
    }
}

export default Profile;