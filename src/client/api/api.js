import * as Axios from 'axios';
import serverConfig from '../../server/config.json'

const instance = Axios.create({
    // withCredentials: true,

    baseURL: serverConfig.apiPrefix,
    responseType: "json",
})

export const getContacts = async () => {
    let res = await instance.get('contact')
    return res.data
}
export const setNewContactAPI = async (user) => {
    let res = await instance.post('contact', user)
    return res
}
export const deleteContactAPI = async (idContact) => {
    instance.delete(`contact/${idContact}`).then(res => {
        return res
    })
}

export const updateContactAPI = async (idContact, newDate) => {

    let res = await instance.put(`contact/${idContact}`, { newDate })
    return res


}

