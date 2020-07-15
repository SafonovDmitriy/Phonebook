import { getFullContactsList, setNewContact, deleteContactT, updateContactT } from "../Reducers/auth-reducers"



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
    return dispatch(deleteContactT(id))
}
export const updateContactS = (dispatch, id, newData) => {
    return dispatch(updateContactT(id, newData))
}