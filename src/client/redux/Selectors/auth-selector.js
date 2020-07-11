import { getFullContactsList, setNewContact, deleteContactT } from "../Reducers/auth-reducers"



export const getAllContact = (state) => {
    return state.auth.allContacts
}
export const getFullContactsListS = (dispatch) => {
    return dispatch(getFullContactsList())
}
export const setNewContactS = (dispatch, user) => {
    return dispatch(setNewContact(user))
}

export const deleteContactS = (dispatch, id) => {
    console.log("Selector")
    return dispatch(deleteContactT(id))
}