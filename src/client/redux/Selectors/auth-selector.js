import { getFullContactsList, setNewContact } from "../Reducers/auth-reducers"



export const getAllContact = (state) => {
    return state.auth.allContacts
}
export const getFullContactsListS = (dispatch) => {
    return dispatch(getFullContactsList())
}
export const setNewContactS = (dispatch, user) => {
    return dispatch(setNewContact(user))


}