import constants from '../constants/appConstants'
import dispatcher from '../dispatcher/dispatcher'

// console.log(constants);
// console.log(dispatcher);

export let incrementActions = {
    incrementCount: (newCount) => {
        console.log('INCREMENT action dispatched');
        dispatcher.dispatch({
            actionType: constants.INCREMENT,
            newCount: newCount
        })
    }
}