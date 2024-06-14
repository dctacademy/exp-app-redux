import { SET_CATEGORIES } from "../actions/categories-action"

const initialState = {
    data: []
}

const categoriesReducer  = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIES: {
            return {...state, data: action.payload }
        }
        default: {
            return {...state}
        }
    }
}

export default categoriesReducer