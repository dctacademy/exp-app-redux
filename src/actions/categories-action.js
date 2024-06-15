import axios from 'axios'
export const SET_CATEGORIES = "SET_CATEGORIES"
export const REMOVE_CATEGORY = "REMOVE_CATEGORY"

export const startGetCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3068/all-categories')
            const result = response.data 
            dispatch(setCategories(result))
        } catch(err) {
            alert(err)
        }
    }
}

const setCategories = (categories) => {
    return { type: SET_CATEGORIES, payload: categories }
}

export const startRemoveCategory = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:3068/remove-category/${id}`)
            const result = response.data 
            dispatch(removeCategory(result._id))
        } catch(err) {
            alert(err)
        }
    }
}

const removeCategory = (id) => {
    return { type: REMOVE_CATEGORY, payload: id}
}