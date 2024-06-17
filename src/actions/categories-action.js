import axios from 'axios'
import { toastifySuccess, toastifyError } from '../utils/toastify'
export const SET_CATEGORIES = "SET_CATEGORIES"
export const REMOVE_CATEGORY = "REMOVE_CATEGORY"
export const ADD_CATEGORY = "ADD_CATEGORY"
export const SET_CATEGORY_ERRORS = "SET_CATEGORY_ERRORS"

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
            toastifySuccess(`Successfully removed ${result.name}`)
        } catch(err) {
            alert(err)
            toastifyError('Error removing category')
        }
    }
}

const removeCategory = (id) => {
    return { type: REMOVE_CATEGORY, payload: id}
}

export const startAddCategory = (formData, resetForm) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3068/create-category', formData)
            const result = response.data 
            dispatch(addCategory(result))
            dispatch(setErrors([]))
            resetForm()
            toastifySuccess(`Successfully created ${result.name}`)
        } catch(err){ 
            dispatch(setErrors(err.response.data.errors))
            toastifyError('Error adding a category')
        }
    }
}

const addCategory = (category) => {
    return { type: ADD_CATEGORY, payload: category}
}

const setErrors = (errors) => {
    return { type: SET_CATEGORY_ERRORS, payload: errors }
}
