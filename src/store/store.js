import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {
    checked: [],
    collection: [],
    filters: [],
    textSearch: '',
    theme: {},
    filterBlock: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHECK":
            return {...state, checked: [...state.checked, action.payload]}
        case "REMOVE_CHECK":
            return {...state, checked: state.checked.filter(element => element.value !== action.payload.value)}
        case "DELETE_CHECK":
            return {...state, checked: []}
        case "ADD_TEXT_SEARCH":
            return {...state, textSearch: action.payload}
        case "REMOVE_TEXT_SEARCH":
            return {...state, textSearch: ""}
        case "FILTER_VISIBLE":
            return {...state, filterBlock: true}
        case "FILTER_INVISIBLE":
            return {...state, filterBlock: false}
        default:
            return state
    }
}


export const store = createStore(reducer, composeWithDevTools())
