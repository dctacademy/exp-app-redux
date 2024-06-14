const initialState = {
    isLoggedIn: false, 
    account: {}
}
const userReducer = (state = initialState, action) => {
    switch(action.type) {

        default: {
            return {...state}
        }
    }
}

export default userReducer