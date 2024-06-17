import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux';
import { setShowCategoryId } from '../actions/categories-action';
export default function CategoryShow(props){
    const { id } = props
    const dispatch = useDispatch()
    const category = useSelector((state) => {
        return state.categories.data.find(ele => ele._id == id)
    })
    const expenses = useSelector((state) => {
        return state.expenses.data.filter(ele => ele.category == id)
    })
    const [modal, setModal] = useState(true);
    const toggle = () => {
        setModal(!modal);
        dispatch(setShowCategoryId(null))
    }
    return (
        <>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>{ category.name }</ModalHeader>
                    <ModalBody>
                        <h3>Listing Expenses</h3>
                    </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}