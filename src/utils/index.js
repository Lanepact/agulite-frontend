export const getAxiosHeader = (bearerToken = null) => {
    return !bearerToken ? 
        { "Content-Type" : "application/json" } : 
            { "Content-Type" : "application/json", "Authorization" : `Bearer ${bearerToken}` }
}

export const validateEmail = (email) => {
    return String(email).match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}