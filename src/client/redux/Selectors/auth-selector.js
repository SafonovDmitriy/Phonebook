import { getFullContactsList, setNewContact, deleteContactT, updateContactT, setSearch } from "../Reducers/auth-reducers"


export const getAllContact = (state) => {
    if (!state.auth.search) {
        return state.auth.allContacts
    } else {
        let arr = []
        const testSearch = state.auth.search
        state.auth.allContacts.map(item => {

            for (let key in item) {
                const test = item[key]
                if (key === 'numbers') {
                    for (let keyN in item[key]) {
                        if (item.numbers[keyN].indexOf(testSearch) !== -1) {
                            return arr.push(item)
                        }

                    }
                }
                if (key !== '_id' && key !== 'image' && key !== 'numbers' && test.indexOf(testSearch) !== -1) {
                    return arr.push(item)

                }

            }
            return undefined
        })


        return arr
    }

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
export const setSearchS = (dispatch, textSearch) => {
    return dispatch(setSearch(textSearch))
}