import { getFullContactsList, setNewContact, deleteContactT, updateContactT, setSearch } from "../Reducers/auth-reducers"
import { contactType } from "../../types/types";


export const getAllContact = (state: any) => {
    if (!state.auth.search) {
        return state.auth.allContacts
    } else {
        let arr: Array<contactType> = []
        const testSearch = state.auth.search
        state.auth.allContacts.map((item: any) => {

            for (let key in item) {
                if (key === 'numbers') {
                    for (let keyN in item[key]) {
                        if ((item.numbers[keyN].toString()).indexOf(testSearch) !== -1) {
                            return arr.push(item)
                        }

                    }
                }
                if (key !== '_id' && key !== 'image' && key !== 'numbers' && item[key].toString().indexOf(testSearch) !== -1) {
                    return arr.push(item)

                }

            }
            return undefined
        })


        return arr
    }

}
export const getFullContactsListS = (dispatch: any) => {
    return dispatch(getFullContactsList())
}
export const setNewContactS = (dispatch: any, user: contactType) => {
    return dispatch(setNewContact(user))
}

export const deleteContactS = (dispatch: any, id: String) => {
    return dispatch(deleteContactT(id))
}
export const updateContactS = (dispatch: any, id: String, newData: contactType) => {
    return dispatch(updateContactT(id, newData))
}
export const setSearchS = (dispatch: any, textSearch: String) => {
    return dispatch(setSearch(textSearch))
}