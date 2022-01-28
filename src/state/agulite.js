import axios from 'axios'
import { reactive } from 'vue';
import { API_BASE_URL, getAxiosHeader } from '../config';

const state = reactive({
    agulite: null
})

const signin = async (data) => {
    let result = await axios.post(`${API_BASE_URL}/users/signin`, data, getAxiosHeader())
    return result
}

const signup = async (data) => {
    let result = await axios.post(`${API_BASE_URL}/users/signup`, data, getAxiosHeader())
    return result
}

export const useAgulite = {
    signin,
    signup
}