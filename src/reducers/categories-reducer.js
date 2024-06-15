import { SET_CATEGORIES, REMOVE_CATEGORY, ADD_CATEGORY, SET_CATEGORY_ERRORS } from "../actions/categories-action"

const initialState = {
    data: [],
    serverErrors: []
}

const categoriesReducer  = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIES: {
            return {...state, data: action.payload }
        }
        case REMOVE_CATEGORY: {
            return { ...state, data: state.data.filter(ele => ele._id != action.payload)}
        }
        case ADD_CATEGORY: {
            return {...state, data: [...state.data, action.payload ]}
        }
        case SET_CATEGORY_ERRORS: {
            return {...state, serverErrors: action.payload }
        }
        default: {
            return {...state}
        }
    }
}

export default categoriesReducer