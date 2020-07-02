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
    let res = await instance.post('contact', { ...user })
    return res.data
}

