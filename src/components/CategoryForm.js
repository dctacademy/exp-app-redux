import { useState } from 'react' 
export default function CategoryForm(){
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
        runClientValidation() 
        if(Object.keys(errors).length == 0) {
            // dispatch()
            
        } else {
            setClientErrors(errors) 
        }
    }
    return (
        <div>
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