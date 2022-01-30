import axios from 'axios'
import { reactive } from 'vue'
import { API_BASE_URL } from '../config'
import { getAxiosHeader } from '../utils'

export const useAgulite = () => {
    
    const state = reactive({
        agulite: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@gmail.com",
            password: "john007",
            interestField: "Digital Marketing",
            experienceLevel: "Beginner",
            yearsOfExperience: "2-4 years",
            image: "",
            bio: "",
            dateOfBirth: "",
            Nationality: "Ghana",
            stateOfResidence: "",
            phoneNumber: "+233678985234",
            residenceAddress: "",
            joinDate: ""
        }
    })

    const signin = async (data) => {
        const result = await axios.post(`${API_BASE_URL}/users/signin`, data, getAxiosHeader())
        localStorage.setItem("logged-in-user", String(result.token))
        setAgulite(result.user)
        return result
    }

    const signup = async (data) => {
        const result = await axios.post(`${API_BASE_URL}/users/signup`, data, getAxiosHeader())
        return result
    }

    const verifyAccount = async (data) => {
        const result = await axios.post(`${API_BASE_URL}/users/verify-account`, data, getAxiosHeader())
        return result
    }

    const updateProfile = async (data) => {
        const bearerToken = localStorage.getItem("logged-in-user")
        const result = await axios.post(`${API_BASE_URL}/users/update-profile`, data, getAxiosHeader(bearerToken))
        setAgulite(result.user)
        return result
    }

    const setAgulite = (agulite) => {
        state.agulite = agulite
    }

    const getAgulite = () => {
        return state.agulite
    }

    return { signin, signup,  verifyAccount, updateProfile, getAgulite }
}