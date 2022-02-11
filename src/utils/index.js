export const getAxiosHeader = (bearerToken = null, contentType = "application/json") => {
    return !bearerToken ? 
        { "Content-Type" : `${contentType}` } : 
            { "Content-Type" : `${contentType}`, "Authorization" : `Bearer ${bearerToken}` }
}

export const validateEmail = (email) => {
    return String(email).match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}