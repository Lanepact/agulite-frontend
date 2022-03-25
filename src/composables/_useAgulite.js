import axios from 'axios'
import { computed, reactive } from 'vue'
import { API_BASE_URL } from '../config'
import { getAxiosHeader } from '../utils'
import { storeUserInDb, deleteUserFromDb, getUserFromDb } from '../utils/localDb'

export const useAgulite = () => {
    
    const signin = async (data) => {
        const result = await axios.post(`${API_BASE_URL}/users/signin`, data, getAxiosHeader())
        localStorage.setItem("logged-in-user", String(result.data.token))
        await setAgulite(result.data.user)
        return result
    }

    const signup = async (data) => {
        const result = await axios.post(`${API_BASE_URL}/users/signup`, data, getAxiosHeader())
        localStorage.setItem("logged-in-user", String(result.data.token))
        return result
    }

    const signout = async () => {
        try{
            localStorage.removeItem("logged-in-user")
            await setAgulite({})
            await deleteUserFromDb()
        }catch(e){}
    }

    const verifyAccount = async (data) => {
        const bearerToken = localStorage.getItem("logged-in-user")
        const headers = getAxiosHeader(bearerToken)
        const result = await axios.post(`${API_BASE_URL}/users/verify-account`, data, { headers })
        localStorage.setItem("logged-in-user", String(result.data.token))
        return result
    }

    const updateProfile = async (data) => {
        const bearerToken = localStorage.getItem("logged-in-user")
        const headers = getAxiosHeader(bearerToken, "multipart/form-data")
        const result = await axios.patch(`${API_BASE_URL}/users/update-profile`, data, { headers })
        await setAgulite(result.data.user)
        return result
    }

    const setAgulite = async (agulite) => {
        await deleteUserFromDb()
        await storeUserInDb(agulite)
    }

    const getAgulite = async () => {
        let user = await getUserFromDb()
        let agulite = (user && user.hasOwnProperty('email')) ? user : null
        return agulite
    }

    return { signin, signup, signout, verifyAccount, updateProfile, getAgulite }
}