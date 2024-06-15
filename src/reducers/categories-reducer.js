import { SET_CATEGORIES, REMOVE_CATEGORY } from "../actions/categories-action"

const initialState = {
    data: []
}

const categoriesReducer  = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIES: {
            return {...state, data: action.payload }
        }
        case REMOVE_CATEGORY: {
            return { ...state, data: state.data.filter(ele => ele._id != action.payload)}
        }
        default: {
            return {...state}
        }
    }
}

export default categoriesReducer