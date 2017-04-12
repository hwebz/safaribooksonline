import React from 'react'

class Profile extends React.Component {

    shouldComponentUpdate(nextProp, nextState) {
        // prevent component re-render the same element (don't have updated props or state)
        return nextProps.name !== this.props.name;
    }

    render() {
        // add, update, delete, ... 1 element in arr will invoke re-render all components
        // using shouldComponentUpdate() to prevent re-render the components don't have updated props or state
        console.log('profile rendered');
        let {person} = props;
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

/*let Profile = props => {
    console.log('profile rendered');
    let {person} = props;
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
}*/

export default Profile;