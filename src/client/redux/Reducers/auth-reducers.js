
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
        // case "SET_NEW_CONTACT":
        //     let newArr = []
        //     state.allContacts.map(item => {
        //         return newArr.push(item)
        //     })
        //     newArr.push(active.newContact)
        //     return {
        //         ...state, allContacts: newArr
        //     }
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
            console.log(active.newData)
            return {

            }



        default: return state
    }
}

export const getAllContacts = (contacts) => ({ type: "GET_ALL_CONTACTS", contacts })
// export const setNewContacts = (newContact) => ({ type: "SET_NEW_CONTACT", newContact })
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

    return (dispatch) => {

        updateContactAPI(id, newData).then(res => {
            dispatch(updateContact(id, newData));
        })


    }
}

export default AuthReducer;