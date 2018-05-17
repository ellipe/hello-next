import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const authInitialState = {
    username: 'initial',
    password: 'password'
}

export const actionTypes = {
    USER_SIGN_OUT: 'USER_SIGN_OUT',
    USER_SIGN_IN: 'USER_SIGN_IN'
}


// REDUCERS
const rootReducer = (state = {}, action) => {
    if (action.type === actionTypes.USER_LOGGED_OUT) {
        state = {}
    }
    return combinedReducers(state, action)
}

const authReducer = (state = authInitialState , action) => {
    switch (action.type) {
        case 'USER_SIGN_IN': 
            return action.user
        default: 
            return state
    }
}

const combinedReducers = combineReducers({
    auth: authReducer
})


// ACTIONS
export const userSignIn = (user) => dispatch => {
    return dispatch({
        type: actionTypes.USER_SIGN_IN,
        user
    })
}

export const userSignOut = () => dispatch => {
    return dispatch({
        type: actionTypes.USER_SIGN_OUT
    })
}

export function initializeStore(initialState = {}) {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}