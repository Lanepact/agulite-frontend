import axios from 'axios'
import { API_BASE_URL } from '../config'
import { getAxiosHeader } from '../utils'
import { 
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

export const useAgulite = () => {
    
    const signInViaGoogle = async () => {
        const data = {}

        const provider = new GoogleAuthProvider()
        const { user } = await signInWithPopup(getAuth(), provider)
        const accessToken = user.accessToken
        const headers = getAxiosHeader(accessToken)

        const result = await axios.post(`${API_BASE_URL}/users/signIn-signUp`, data, { headers })
        console.log({ result })
        return result
    }

    const signUpViaEmailAndPassword = async ({ email, password }) => {
        const data = {}

        const { user } = await createUserWithEmailAndPassword(getAuth(), email, password)
        const accessToken = user.accessToken
        const headers = getAxiosHeader(accessToken)
        // const result = await axios.post(`${API_BASE_URL}/users/signIn-signUp`, data, { headers })
        // return result
    }

    const signInViaEmailAndPassword = async ({ email, password }) => {
        const data = {}

        const { user } = await signInWithEmailAndPassword(getAuth(), email, password)
        const accessToken = user.accessToken
        const headers = getAxiosHeader(accessToken)
        const result = await axios.post(`${API_BASE_URL}/users/signIn-signUp`, data, { headers })
        return result
    }

    const inviteToSlack = async (data) => {
        const accessToken = getAgulite().accessToken
        const headers = getAxiosHeader(accessToken)
        const result = await axios.post(`${API_BASE_URL}/users/signUp`, data, { headers })
        return result
    }

    const signout = async () => {
        signOut(getAuth())
            .then(() => { console.log('Signed out') })
                .catch(() => { console.log('Error while signing out') })
    }

    const updateProfile = async (data) => {
        const accessToken = getAgulite().accessToken
        const headers = getAxiosHeader(accessToken, "multipart/form-data")
        const result = await axios.patch(`${API_BASE_URL}/users/update-profile`, data, { headers })
        return result
    }

    const saveSyllabusViewer = async (data) => {
        const headers = getAxiosHeader()
        const result = await axios.post(`${API_BASE_URL}/syallabus`, data, { headers })
        return result
    }

    const getAgulite = async () => {
        const { currentUser } = getAuth()
        return currentUser
    }

    return { 
        signInViaGoogle,
        signUpViaEmailAndPassword,
        signInViaEmailAndPassword,
        inviteToSlack,
        signout,
        updateProfile,
        saveSyllabusViewer,
        getAgulite
    }
}