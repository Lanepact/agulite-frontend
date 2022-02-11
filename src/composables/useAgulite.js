import axios from 'axios'
import { computed, reactive } from 'vue'
import { API_BASE_URL } from '../config'
import { getAxiosHeader } from '../utils'

let state = reactive({
    agulite: {}
})

export const useAgulite = () => {
    
    const signin = async (data) => {
        const result = await axios.post(`${API_BASE_URL}/users/signin`, data, getAxiosHeader())
        localStorage.setItem("logged-in-user", String(result.data.token))
        setAgulite(result.data.user)
        return result
    }

    const signup = async (data) => {
        const result = await axios.post(`${API_BASE_URL}/users/signup`, data, getAxiosHeader())
        localStorage.setItem("logged-in-user", String(result.data.token))
        return result
    }

    const signout = () => {
        if(localStorage.getItem("logged-in-user")){
            localStorage.removeItem("logged-in-user")
            setAgulite({})
        }
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
        setAgulite(result.data.user)
        return result
    }

    const setAgulite = (agulite) => {
        state.agulite = agulite
    }

    const getAgulite = () => {
        return state.agulite
    }

    return { signin, signup, signout, verifyAccount, updateProfile, getAgulite }
}