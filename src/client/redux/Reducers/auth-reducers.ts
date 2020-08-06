
import { getContacts, setNewContactAPI, deleteContactAPI, updateContactAPI } from '../../api/api';
import { contactType } from '../../types/types';


let initialState = {
    allContacts: [] as Array<contactType>,
    search: ""
}
export type initialStateType = typeof initialState
const AuthReducer = (state = initialState, active: any): initialStateType => {
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
            let newContacts: Array<contactType> = []
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
        case "SET_SEARCH":
            return { ...state, search: active.textSearch }



        default: return state
    }
}
type getAllContactsType = {
    type: "GET_ALL_CONTACTS",
    contacts: Array<contactType>
}
export const getAllContacts = (contacts: Array<contactType>): getAllContactsType => ({ type: "GET_ALL_CONTACTS", contacts })
type deleteContactType = {
    type: "DELETE_CONTACT"
    idContact: String
}
export const deleteContact = (idContact: String): deleteContactType => ({ type: "DELETE_CONTACT", idContact })
type updateContactType = {
    type: "UPDATE_CONTACT",
    idContact: String
    newData: contactType
}
export const updateContact = (idContact: String, newData: contactType): updateContactType => ({ type: "UPDATE_CONTACT", idContact, newData })
type setSearchType = {
    type: "SET_SEARCH"
    textSearch: String
}
export const setSearch = (textSearch: String): setSearchType => ({ type: "SET_SEARCH", textSearch })


export const getFullContactsList = () => {
    return async (dispatch: any) => {
        let contact = await getContacts()
        dispatch(getAllContacts(contact))
    }
}
export const setNewContact = (user: contactType) => {
    return async (dispatch: any) => {
        let res = await setNewContactAPI(user)
        if (res.status === 200) {
            let contact = await getContacts()
            dispatch(getAllContacts(contact))
        }
    }
}
export const deleteContactT = (id: String) => {
    return (dispatch: any) => {
        deleteContactAPI(id).then(res => {
            dispatch(deleteContact(id));
        })
    }
}

export const updateContactT = (id: String, newData: contactType) => {
    return async (dispatch: any) => {
        let res = await updateContactAPI(id, newData)
        if (res.status === 200) {
            dispatch(updateContact(id, newData))
        }
    }
}

export default AuthReducer;