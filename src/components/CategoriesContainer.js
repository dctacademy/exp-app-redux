import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { startGetCategories } from '../actions/categories-action'
export default function CategoriesContainer(){
    const dispatch = useDispatch() 
    const categories  = useSelector((state) => {
        return state.categories
    })

    useEffect(() => {
       dispatch(startGetCategories())
    }, [])


    return (
        <div>
            <h2>Listing Categories - { categories.data.length } </h2>
        </div>
    )
}