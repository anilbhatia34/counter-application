const redux = require('redux');
const createStore = redux.createStore
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const Buy_Cake ='Buy_Cake';
const Buy_IceCream ='Buy_IceCream';

// We have Defined Action
function myCake() {
    return {
        type: Buy_Cake,
        info: 'First Redux Action'
    }
}
function myIceCream() {
    return {
        type: Buy_IceCream,
        info: 'Second Redux Action'
    }
}

// We have defined Initial State
const initialCakeState = {
    numOfCakes: 10,
    }
// We have defined Initial State
const initialIceCreamState = {
   
    numOfIceCreams: 20
}

// We have defined Reducer
const cakeReducer =(state = initialCakeState, action) => {
    switch(action.type) {
        case Buy_Cake: return {
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
        default: return state
    }
} 

const iceCreamReducer =(state = initialIceCreamState, action) => {
    switch(action.type) {
        case Buy_IceCream: return {
            ...state,
            numOfIceCreams:state.numOfIceCreams - 1
        }
        default: return state
    }
} 
// We have created Store

const combineReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const Reducer = combineReducer;
const store= createStore(Reducer, applyMiddleware(logger));
console.log('Initial State', store.getState());
const unsubscribe =store.subscribe(() => console.log('Updated State', store.getState()));
store.dispatch(myCake())
store.dispatch(myCake())
store.dispatch(myIceCream())
store.dispatch(myIceCream())
store.dispatch(myIceCream())
unsubscribe();