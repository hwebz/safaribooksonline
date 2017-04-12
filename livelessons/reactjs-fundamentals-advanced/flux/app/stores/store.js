import constants from '../constants/appConstants'
import dispatcher from '../dispatcher/dispatcher'
import {EventEmitter} from 'events'

// TODO backing variables
let _count = 0;

function getCount() {
    return _count;
}

function setCount() {
    _count = _count + 1;
}

// TODO define the actual store
export let TodoStore = Object.assign({}, EventEmitter.prototype, {
    getCount: getCount,
    emitChange() {
        this.emit('CHANGE_EVENT')
    },
    addChangeListener(callback) {
        this.on('CHANGE_EVENT', callback)
    },
    removeChangeListener(callback) {
        this.removeListener('CHANGE_EVENT', callback);
    }
})

// register with the dispatcher
dispatcher.register(action => {
    console.log(action);
    switch(action.actionType) {
        case 'INCREMENT':
            setCount();
            TodoStore.emitChange();
            break;
    }
});