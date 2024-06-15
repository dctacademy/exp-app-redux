import { useState } from 'react' 
import { startAddCategory } from '../actions/categories-action'
import { useDispatch, useSelector} from 'react-redux'
export default function CategoryForm(){
    const dispatch = useDispatch()
    const serverErrors = useSelector((state) => {
        return state.categories.serverErrors
    })
    const [name,setName] = useState('')
    const [clientErrors, setClientErrors] = useState({}) 
    const errors = {} 
    const runClientValidation = () => {
        if(name.trim().length == 0) {
            errors.name = 'Name can not be blank'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: name 
        }
        runClientValidation() 
        const resetForm = () => {
            setName('')
        }
        if(Object.keys(errors).length == 0) {
            dispatch(startAddCategory(formData, resetForm))        
            setClientErrors({})
        } else {
            setClientErrors(errors) 
        }
    }
    return (
        <div>
            { serverErrors.length > 0 && (
                <div>
                    <h2>Server Errors</h2>
                    <ul>
                        { serverErrors.map((ele, i) => {
                            return <li key={i}>{ ele.msg } </li>
                        })} 
                    </ul>
                </div> 
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    Enter Name
                </label> <br/> 
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} /> 
                { clientErrors.name && <span>{ clientErrors.name }</span> }
                <br /> 
                <input type="submit" />
            </form>
        </div>
    )
}