
import { getContacts, setNewContactAPI, deleteContactAPI, updateContactAPI } from './../../api/api';



let initialState = {
    allContacts: []
}

const AuthReducer = (state = initialState, active) => {
    switch (active.type) {
        case "GET_ALL_CONTACTS":
            return {
                ...state, allContacts: active.contacts
            }
        case "DELETE_CONTACT":
            return {
                ...state, allContacts: state.allContacts.filter(item => {
                    if (item._id !== active.idContact) {
                        return item
                    }
                    return undefined
                })
            }
        case "UPDATE_CONTACT":
            let newContacts = []
            state.allContacts.map(item => {
                if (item._id === active.idContact) {
                    return newContacts.push({ _id: active.idContact, ...active.newData })
                } else {
                    return newContacts.push(item)
                }
            })
            return {
                ...state, allContacts: newContacts
            }



        default: return state
    }
}

export const getAllContacts = (contacts) => ({ type: "GET_ALL_CONTACTS", contacts })
export const deleteContact = (idContact) => ({ type: "DELETE_CONTACT", idContact })
export const updateContact = (idContact, newData) => ({ type: "UPDATE_CONTACT", idContact, newData })


export const getFullContactsList = () => {
    return async (dispatch) => {
        let contact = await getContacts()
        dispatch(getAllContacts(contact))
    }
}
export const setNewContact = (user) => {
    return async (dispatch) => {
        console.log(user)
        let res = await setNewContactAPI(user)
        if (res.status === 200) {
            let contact = await getContacts()
            dispatch(getAllContacts(contact))
        }
    }
}
export const deleteContactT = (id) => {
    return (dispatch) => {
        deleteContactAPI(id).then(res => {
            dispatch(deleteContact(id));
        })
    }
}

export const updateContactT = (id, newData) => {
    return async (dispatch) => {
        let res = await updateContactAPI(id, newData)
        if (res.status === 200) {
            dispatch(updateContact(id, newData))
        }
    }
}

export default AuthReducer;