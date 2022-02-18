import {createStore, compose,applyMiddleware,combineReducers} from 'redux'
import {reducer as Todoreducer} from "./Todo/reducer"
import thunk from "redux-thunk"
import {reducer as countReducer} from "./Counter/reducer"
const rootReducer=combineReducers({
    todos:Todoreducer,
    counter:countReducer
})
export const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)