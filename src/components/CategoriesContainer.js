import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { startGetCategories } from '../actions/categories-action'
import CategoriesList from './CategoriesList'
import CategoryForm from './CategoryForm'
export default function CategoriesContainer(){
    const dispatch = useDispatch() 
    const categories  = useSelector((state) => {
        return state.categories
    })

    useEffect(() => {
       dispatch(startGetCategories())
    }, [dispatch])


    return (
        <>
            <h2>Listing Categories - { categories.data.length } </h2>
            <div className="col-md-8">
                <CategoriesList data={categories.data} />
            </div>
            <div className="col-md-4">
                <CategoryForm />
            </div>
        </>
    )
}