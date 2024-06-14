import axios from 'axios'
export const SET_CATEGORIES = "SET_CATEGORIES"

export const startGetCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3068/all-categories')
            const result = response.data 
            dispatch(setCategories(result))
        } catch(err) {

        }
    }
}

const setCategories = (categories) => {
    return { type: SET_CATEGORIES, payload: categories }
}
