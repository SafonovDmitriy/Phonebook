
import { getContacts } from './../../api/api';



let initialState = {
    allContacts: []
}

const AuthReducer = (state = initialState, active) => {
    switch (active.type) {
        case "GET_ALL_CONTACTS":
            return {
                ...state, allContacts: active.contacts
            }
        default: return state
    }
}

export const getAllContacts = (contacts) => ({ type: "GET_ALL_CONTACTS", contacts })


export const getFullContactsList = () => {
    return async (dispatch) => {
        let contact = await getContacts()
        dispatch(getAllContacts(contact))
    }
}

export default AuthReducer;