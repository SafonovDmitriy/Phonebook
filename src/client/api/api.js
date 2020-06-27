import * as Axios from 'axios';
import serverConfig from '../../server/config.json'

const instance = Axios.create({
    withCredentials: true,
    baseURL: serverConfig.apiPrefix,
})

export const getContacts = () => {
    return instance.get('contact').then(response => {
        return response
    }
    )
}