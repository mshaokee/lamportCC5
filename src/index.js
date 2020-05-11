import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
const reducerInitialState = {
    speed: 0,
    passengers: []
}

//create myReducer to take in action
const myReducer = (state = reducerInitialState, action) => {
    console.log('in myReducer', action, state);
    // if(action.type === 'increase'){
    //     console.log('increasing speed', action.payload);
    //     return this.state.speed + action.payload;
    // } else if(action.type === 'decrease'){
    //     console.log('decreasing speed', action.payload);
    //     return this.state.speed - action.payload;
    // } else if(action.type === 'passenger'){
    //     return {...state, passengers: action.payload}
    // }
    return state;
};//end myReducer
// use reducer in store
const storeInstance = createStore(myReducer);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
