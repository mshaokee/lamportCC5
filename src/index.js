import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
//had to create variable that holds fake database
let passengers = ['Shao'];

const reducerInitialState = {
    speed: 0,
    passengers
}


//create myReducer to take in action
const myReducer = (state = reducerInitialState, action) => {
    console.log('in myReducer', action, state);
    if(action.type === 'increase'){
        console.log('increasing speed');
        //return spread state, that way not mutating. then adjusting speed to + 1 itself
        return {...state, speed: state.speed + 1};
    } 
    else if(action.type === 'decrease'){
        console.log('decreasing speed');
        return {...state, speed: state.speed - 1};
    } 
     if(action.type === 'passenger'){
        console.log('listing passengers', action.payload);
        //push our new name into our array, return spread.
        passengers.push(action.payload);
        return {...state, passengers: passengers};
    }
    //must return state, return something so page operates on start
    return state;
    
};//end myReducer
// use reducer in store
const storeInstance = createStore(myReducer);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
