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


// export const createContact = async (name) => {
//     let res = await instance.post('contact', {})


// }