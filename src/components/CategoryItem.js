import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { startRemoveCategory } from '../actions/categories-action'
export default function CategoryItem(props){
    const dispatch = useDispatch()
    const { id, name } = props

    const handleRemove = () => {
        const userConfirm = window.confirm("Are you sure?")        
        if(userConfirm) {
            dispatch(startRemoveCategory(id))
        }
    }
    return <li key={id}>{name} <button onClick={handleRemove}>remove</button></li>
}

CategoryItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}