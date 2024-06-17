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
    return <li key={id} className='list-group-item'>
        {name} 
        <div className="btn-group float-end">
            <button className='btn btn-outline-secondary'>edit</button>
            <button className='btn btn-outline-info'>show</button>
            <button onClick={handleRemove} className='btn btn-outline-danger'>remove</button>
        </div>
        
    </li>
}

CategoryItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}